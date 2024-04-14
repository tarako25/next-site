import Paginations from '@/app/components/Paginations'
import { ArticleType } from '@/types/ArticleType'
import { PageType } from '@/types/PageType'
import Link from 'next/link'

const getZennArticles = async (currentPage: number) => {
  const res = await fetch(
    `http://localhost:3000/api/getZennArticles?page=${currentPage}`,
    {
      cache: 'no-store',
    },
  )
  const data = await res.json()
  return data
}

const Articles = async (props: PageType) => {
  const data = await getZennArticles(props.page)
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center w-full">
          <span className="w-[18px] h-[30px] base-color"></span>
          <h1 className="w-full my-3 p-3 font-bold text-xl">記事一覧</h1>
        </div>
        <div className="flex w-full justify-between flex-wrap">
          {data.articles.slice(0, 48).map((article: ArticleType) => (
            <Link
              href={`https://zenn.dev/${article.path}`}
              key={article.id}
              className="flex justify-start items-center md:w-[48%] w-[100%] h-[100px] mb-5 px-1 bg-white border border-slate-200 rounded-md"
            >
              <div className="min-w-[90px] h-[90px] bg-slate-100 rounded flex justify-center items-center">
                <div className="text-5xl">{article.emoji}</div>
              </div>
              <div className="h-[90px] px-2 font-bold">
                <div className="text-xs py-1">
                  {new Intl.DateTimeFormat('ja-JP', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  }).format(new Date(article.published_at))}
                </div>
                <div className=" text-sm overflow-hidden text-ellipsis line-clamp-3">
                  {article.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Paginations page={props.page} totalPage={data.totalPage} />
    </>
  )
}

export default Articles
