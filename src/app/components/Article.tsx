import React from "react";

const Article = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <h1 className="w-full mt-5 p-2 font-bold text-xl">新着記事</h1>
        <hr className="border border-slate-200 w-full mb-5"></hr>
        <div className="flex w-full justify-between flex-wrap">
          <div className="sm:w-[48%] w-[100%] h-[100px] mb-5 border border-slate-200 rounded-md"></div>
          <div className="sm:w-[48%] w-[100%] h-[100px] mb-5 border border-slate-200 rounded-md"></div>
          <div className="sm:w-[48%] w-[100%] h-[100px] mb-5 border border-slate-200 rounded-md"></div>
          <div className="sm:w-[48%] w-[100%] h-[100px] mb-5 border border-slate-200 rounded-md"></div>
          <div className="sm:w-[48%] w-[100%] h-[100px] mb-5 border border-slate-200 rounded-md"></div>
          <div className="sm:w-[48%] w-[100%] h-[100px] mb-5 border border-slate-200 rounded-md"></div>
        </div>
      </div>
    </>
  );
};

export default Article;
