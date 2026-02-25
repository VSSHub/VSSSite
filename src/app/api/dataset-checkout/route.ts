import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-01-28.clover',
})

const PRICES: Record<string, string> = {
  '128GB': 'price_1T4aTxBeUECy8XwJf2Qvl5kW',
  '256GB': 'price_1T4aU1BeUECy8XwJbYaDUDBP',
  '500GB': 'price_1T4aU6BeUECy8XwJXoO1qpUJ',
  '1TB':   'price_1T4aV1BeUECy8XwJjbLKjUnU',
}

export async function POST(req: NextRequest) {
  const { driveSize, categories, customBuild } = await req.json()
  const priceId = PRICES[driveSize]
  if (!priceId) return NextResponse.json({ error: 'Invalid drive size' }, { status: 400 })

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    shipping_address_collection: { allowed_countries: ['US'] },
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/datasets/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/datasets`,
    metadata: {
      product: 'dataset_ssd',
      drive_size: driveSize,
      categories: categories.join(', '),
      custom_build: customBuild ? 'yes' : 'no',
    },
    custom_text: {
      submit: { message: customBuild ? 'Custom build — ships in 10 business days. Free shipping.' : 'Standard build — ships in 7 business days. Free shipping.' },
    },
  })

  return NextResponse.json({ url: session.url })
}
