const LoadingArticles = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="flex justify-start items-center md:w-[48%] w-[100%] h-[100px] mb-5 px-1 bg-white border border-slate-200 rounded-md"
        >
          <div className="min-w-[90px] h-[90px] bg-slate-100 rounded flex justify-center items-center wave-animation">
            <div className="text-5xl" />
          </div>
          <div className="h-[90px] px-2 font-bold w-full">
            <div className="text-xs pb-5 my-1 bg-slate-100 rounded wave-animation" />
            <div className="text-sm py-7 bg-slate-100 my-1 rounded wave-animation" />
          </div>
        </div>
      ))}
    </>
  )
}

export default LoadingArticles
