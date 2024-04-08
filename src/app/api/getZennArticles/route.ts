import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const page = searchParams.get('page')

  if (page) {
    const res = await fetch(
      `https://zenn.dev/api/articles?username=catnose99&order=latest&page=${page}`,
      { cache: 'no-store' },
    )
    const data = await res.json()
    return NextResponse.json(data)
  } else {
    const res = await fetch(
      `https://zenn.dev/api/articles?username=catnose99&order=latest`,
      { cache: 'no-store' },
    )
    const data = await res.json()
    return NextResponse.json(data)
  }
}
