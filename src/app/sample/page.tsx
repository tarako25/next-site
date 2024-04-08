import Sample from '@/app/components/Sample'
import { Suspense } from 'react'

const page = () => {
  return (
    <>
      <section>
        <Suspense fallback={<p className="text-red-200">Loading weather...</p>}>
          <Sample />
        </Suspense>
      </section>
    </>
  )
}

export default page
