import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

const Paginations = (props: any) => {
  const Currentpage = Number(props.page)
  const totalPage = Number(props.totalPage)

  return (
    <>
      <Pagination className="mb-5">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className="cursor-pointer"
              href={Currentpage === 1 ? undefined : `?page=${Currentpage - 1}`}
            />
          </PaginationItem>

          {Array.from({ length: Math.min(totalPage, 3) }, (_, index) => {
            // 最初に表示するページ番号を計算
            let startPage = Math.max(Currentpage - 1, 1)
            // 表示する最後のページ番号が totalPage を超えないように調整
            // さらに、startPage が 1 以上になるように Math.max を使用して調整
            startPage = Math.max(Math.min(startPage, totalPage - 2), 1)
            const pageNumber = startPage + index

            return (
              <PaginationItem key={index}>
                <PaginationLink
                  className={`cursor-pointer`}
                  isActive={Currentpage === pageNumber}
                  href={`?page=${pageNumber}`}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            )
          })}

          {/* Ellipsisの表示条件を追加 */}
          {totalPage > 3 && Currentpage < totalPage - 1 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationNext
              className="cursor-pointer"
              href={
                Currentpage === totalPage
                  ? undefined
                  : `?page=${Currentpage + 1}`
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  )
}

export default Paginations
