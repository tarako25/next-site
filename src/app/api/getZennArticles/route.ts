import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch(
    `https://zenn.dev/api/articles?username=tarako314&order=latest`,
    { cache: 'no-store' },
  )
  const data = await res.json()
  return NextResponse.json(data)
}
