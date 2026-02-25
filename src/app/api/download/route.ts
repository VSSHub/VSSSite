import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token')

  if (!token) {
    return NextResponse.json({ error: 'Missing token' }, { status: 400 })
  }

  // Look up the token
  const { data: purchase, error } = await supabase
    .from('book_purchases')
    .select('*')
    .eq('download_token', token)
    .single()

  if (error || !purchase) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 404 })
  }

  // Check expiry
  if (new Date(purchase.expires_at) < new Date()) {
    return NextResponse.json(
      { error: 'This download link has expired. Email vibesoftwaresolutions@gmail.com for a new one.' },
      { status: 410 }
    )
  }

  // Generate a signed URL from private Supabase storage (valid for 60 seconds)
  const { data: signedUrlData, error: storageError } = await supabase.storage
    .from('books')
    .createSignedUrl('vibe-coding-manual.pdf', 60)

  if (storageError || !signedUrlData) {
    console.error('Storage error:', storageError)
    return NextResponse.json({ error: 'Could not generate download link' }, { status: 500 })
  }

  // Mark as downloaded (but don't block re-downloads within the window)
  await supabase
    .from('book_purchases')
    .update({ downloaded: true, downloaded_at: new Date().toISOString() })
    .eq('download_token', token)

  // Redirect directly to the signed URL
  return NextResponse.redirect(signedUrlData.signedUrl)
}
