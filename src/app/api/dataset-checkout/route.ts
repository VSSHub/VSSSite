import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-01-28.clover',
})

const PRICES: Record<string, string> = {
  '128gb': 'price_1T4aTxBeUECy8XwJf2Qvl5kW',
  '256gb': 'price_1T4aU1BeUECy8XwJbYaDUDBP',
  '500gb': 'price_1T4aU6BeUECy8XwJXoO1qpUJ',
  '1tb': 'price_1T4aV1BeUECy8XwJjbLKjUnU',
}

export async function POST(req: NextRequest) {
  try {
    const { size, categories, customBuild } = await req.json()

    const priceId = PRICES[size]
    if (!priceId) {
      return NextResponse.json({ error: 'Invalid size' }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'payment',
      shipping_address_collection: { allowed_countries: ['US'] },
      metadata: {
        categories: categories.join(', '),
        customBuild: customBuild ? 'true' : 'false',
        size,
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/datasets/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/datasets`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}