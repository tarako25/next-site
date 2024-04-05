'use client'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Articles = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    getZennArticles()
  }, [])
  const getZennArticles = async () => {
    const res = await fetch('api/getZennArticles')
    const data = await res.json()
    setArticles(data.articles)
    console.log(data)
  }
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center w-full">
          <span className="w-[18px] h-[30px] base-color"></span>
          <h1 className="w-full my-3 p-3 font-bold text-xl">記事一覧</h1>
        </div>
        <div className="flex w-full justify-between flex-wrap">
          {articles.map((article) => (
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
      <Pagination className="mb-5">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  )
}

export default Articles
