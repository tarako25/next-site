import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  let page = Number(searchParams.get('page')) || 1
  let articles: any[] = [] // 明示的に any[] 型を指定
  const username = 'catnose99'
  let totalCount

  const getZennArticles = async (url: string) => {
    const res = await fetch(url, { cache: 'no-store' })
    const data = await res.json()
    articles = articles.concat(data.articles)
    if (data.next_page) {
      await getZennArticles(
        `https://zenn.dev/api/articles?username=${username}&order=latest&page=${data.next_page}`,
      )
    }
  }

  await getZennArticles(
    `https://zenn.dev/api/articles?username=${username}&order=latest&page=${page}`,
  )

  // 記事の総数を取得
  const count = articles.length
  if (page > 1) {
    totalCount = count + 48 * (page - 1)
  } else {
    totalCount = count
  }
  const totalPage = Math.ceil(totalCount / 48)

  // 記事の総数を含むレスポンスを返す
  return NextResponse.json({ totalPage, articles })
}
