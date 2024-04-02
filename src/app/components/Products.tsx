import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";

const Products = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full mb-5">
        <div className="flex items-center w-full">
          <span className="w-[18px] h-[30px] base-color"></span>
          <h1 className="w-full my-3 p-3 font-bold text-xl">制作物一覧</h1>
        </div>
        <div className="flex w-full justify-between flex-wrap">
          <div className="flex flex-col text-center items-center justify-center md:w-[32%] sm:w-[48%] w-[100%] mb-5 bg-white border border-slate-200 rounded-md">
            <div className="w-[95%] h-[275px] sm:h-[200px] bg-slate-300 my-3"></div>
            <div className="w-[95%]">Lorem ipsum dolor sit amet.</div>
            <div className="w-[95%] flex flex-wrap justify-center my-2">
              <Badge variant="outline" className="mr-2 mb-2 text-sm">
                Next.js
              </Badge>
              <Badge variant="outline" className="mr-2 mb-2 text-sm">
                Java
              </Badge>
              <Badge variant="outline" className="mr-2 mb-2 text-sm">
                Kotolin
              </Badge>
            </div>
          </div>
          <div className="flex flex-col text-center items-center justify-center md:w-[32%] sm:w-[48%] w-[100%] mb-5 bg-white border border-slate-200 rounded-md">
            <div className="w-[95%] h-[275px] sm:h-[200px] bg-slate-300 my-3"></div>
            <div className="w-[95%]">Lorem ipsum dolor sit amet.</div>
            <div className="w-[95%] flex flex-wrap justify-center my-2">
              <Badge variant="outline" className="mr-2 mb-2 text-sm">
                Next.js
              </Badge>
              <Badge variant="outline" className="mr-2 mb-2 text-sm">
                Java
              </Badge>
              <Badge variant="outline" className="mr-2 mb-2 text-sm">
                Kotolin
              </Badge>
            </div>
          </div>
          <div className="flex flex-col text-center items-center justify-center md:w-[32%] sm:w-[48%] w-[100%] mb-5 bg-white border border-slate-200 rounded-md">
            <div className="w-[95%] h-[275px] sm:h-[200px] bg-slate-300 my-3"></div>
            <div className="w-[95%]">Lorem ipsum dolor sit amet.</div>
            <div className="w-[95%] flex flex-wrap justify-center my-2">
              <Badge variant="outline" className="mr-2 mb-2 text-sm">
                Next.js
              </Badge>
              <Badge variant="outline" className="mr-2 mb-2 text-sm">
                Java
              </Badge>
              <Badge variant="outline" className="mr-2 mb-2 text-sm">
                Kotolin
              </Badge>
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
  );
};

export default Products;
