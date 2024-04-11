import LoadingText from '@/app/components/LoadingText'
const LoadingArticles = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="flex justify-start items-center md:w-[48%] w-[100%] h-[100px] mb-5 px-1 bg-white border border-slate-200 rounded-md"
        >
          <LoadingText width="min-w-[90px]" height="h-[90px]" />
          <div className="h-[90px] px-2 font-bold w-full">
            <LoadingText margin="my-2" width="h-[15px]" />
            <LoadingText width="h-[40px]" />
          </div>
        </div>
      ))}
    </>
  )
}

export default LoadingArticles
