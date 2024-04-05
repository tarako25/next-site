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
import { useEffect } from 'react'

const Articles = () => {
  useEffect(() => {
    getZennArticles()
  }, [])
  const getZennArticles = async () => {
    const res = await fetch('api/getZennArticle')
    const data = await res.json()
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
          <div className="flex justify-center items-center md:w-[48%] w-[100%] h-[100px] mb-5 px-1 bg-white border border-slate-200 rounded-md">
            <div className="min-w-[90px] h-[90px] bg-slate-300 rounded"></div>
            <div className="h-[90px] px-2 py-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Possimus, cumque.
            </div>
          </div>
          <div className="flex justify-center items-center md:w-[48%] w-[100%] h-[100px] mb-5 px-1 bg-white border border-slate-200 rounded-md">
            <div className="min-w-[90px] h-[90px] bg-slate-300 rounded"></div>
            <div className="h-[90px] px-2 py-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Possimus, cumque.
            </div>
          </div>
          <div className="flex justify-center items-center md:w-[48%] w-[100%] h-[100px] mb-5 px-1 bg-white border border-slate-200 rounded-md">
            <div className="min-w-[90px] h-[90px] bg-slate-300 rounded"></div>
            <div className="h-[90px] px-2 py-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Possimus, cumque.
            </div>
          </div>
          <div className="flex justify-center items-center md:w-[48%] w-[100%] h-[100px] mb-5 px-1 bg-white border border-slate-200 rounded-md">
            <div className="min-w-[90px] h-[90px] bg-slate-300 rounded"></div>
            <div className="h-[90px] px-2 py-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Possimus, cumque.
            </div>
          </div>
          <div className="flex justify-center items-center md:w-[48%] w-[100%] h-[100px] mb-5 px-1 bg-white border border-slate-200 rounded-md">
            <div className="min-w-[90px] h-[90px] bg-slate-300 rounded"></div>
            <div className="h-[90px] px-2 py-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Possimus, cumque.
            </div>
          </div>
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
