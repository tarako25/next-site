import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const Production = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full mb-5">
        <div className="flex items-center w-full">
          <span className="w-[18px] h-[30px] bg-sky-400"></span>
          <h1 className="w-full my-3 p-3 font-bold text-xl">最近の制作物</h1>
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
        <Link href="articles" className={`${buttonVariants({ variant: "outline" })} mt-2`}>
          制作物一覧
        </Link>
      </div>
    </>
  );
};

export default Production;
