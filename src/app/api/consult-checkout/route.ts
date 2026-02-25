import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
})

const CONSULTATION_PRICE = 'price_1T4aBNBeUECy8XwJRMSeurRP'
const TRAVEL_FEE_PRICE = 'price_1T4aCJBeUECy8XwJhff9iF1w'

export async function POST(req: NextRequest) {
  const { includeTravel } = await req.json()

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
    { price: CONSULTATION_PRICE, quantity: 1 },
  ]

  if (includeTravel) {
    line_items.push({ price: TRAVEL_FEE_PRICE, quantity: 1 })
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items,
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/consult/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/consult`,
    metadata: { product: 'consultation', travel_fee: includeTravel ? 'yes' : 'no' },
  })

  return NextResponse.json({ url: session.url })
}
