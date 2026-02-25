import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-01-28.clover',
})

const BASE_PRICE = 'price_1T4aBNBeUECy8XwJRMSeurRP'
const TRAVEL_PRICE = 'price_1T4aCJBeUECy8XwJhff9iF1w'

export async function POST(req: NextRequest) {
  try {
    const { includeTravelFee } = await req.json()
    const lineItems = [{ price: BASE_PRICE, quantity: 1 }]
    if (includeTravelFee) lineItems.push({ price: TRAVEL_PRICE, quantity: 1 })

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/consult/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/consult`,
    })
    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}