import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Article = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full mb-5">
        <div className="flex items-center w-full">
          <span className="w-[18px] h-[30px] base-color"></span>
          <h1 className="w-full my-3 p-3 font-bold text-xl">新着記事</h1>
        </div>
        <div className="flex w-full justify-between flex-wrap">
          <div className="sm:w-[48%] w-[100%] h-[100px] mb-5 bg-white border border-slate-200 rounded-md"></div>
          <div className="sm:w-[48%] w-[100%] h-[100px] mb-5 bg-white border border-slate-200 rounded-md"></div>
          <div className="sm:w-[48%] w-[100%] h-[100px] mb-5 bg-white border border-slate-200 rounded-md"></div>
          <div className="sm:w-[48%] w-[100%] h-[100px] mb-5 bg-white border border-slate-200 rounded-md"></div>
          <div className="sm:w-[48%] w-[100%] h-[100px] mb-5 bg-white border border-slate-200 rounded-md"></div>
          <div className="sm:w-[48%] w-[100%] h-[100px] mb-5 bg-white border border-slate-200 rounded-md"></div>
        </div>
        <Link href="articles" className={`${buttonVariants({ variant: "outline" })} mt-2`}>
          記事一覧
        </Link>
      </div>
    </>
  );
};

export default Article;
