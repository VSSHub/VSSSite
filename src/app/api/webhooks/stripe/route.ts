import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'
import { randomBytes } from 'crypto'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
})

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    if (session.payment_status !== 'paid') {
      return NextResponse.json({ received: true })
    }

    // Generate a secure one-time download token
    const token = randomBytes(32).toString('hex')
    const expiresAt = new Date(Date.now() + 72 * 60 * 60 * 1000) // 72 hours

    const { error } = await supabase.from('book_purchases').insert({
      stripe_session_id: session.id,
      stripe_payment_intent: session.payment_intent as string,
      customer_email: session.customer_details?.email ?? '',
      product: 'vibe-coding-manual',
      download_token: token,
      expires_at: expiresAt.toISOString(),
      downloaded: false,
    })

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json({ error: 'DB error' }, { status: 500 })
    }

    console.log(`Purchase fulfilled for ${session.customer_details?.email}`)
  }

  return NextResponse.json({ received: true })
}
