import Articles from '../components/Articles'

const ArticlesPage = ({ searchParams }: { searchParams: { page: number } }) => {
  return (
    <>
      <Articles page={searchParams.page || 1} />
    </>
  )
}

export default ArticlesPage
