'use client'
import { useEffect, useState } from 'react'

interface Data {
  userId: number
  id: number
  title: string
}
const Sample = () => {
  const [data, setData] = useState<Data[]>([])

  useEffect(() => {
    getApi()
  }, [])

  const getApi = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json()
    console.log(data)
    setData([data])
  }
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl">Test Suspense</h1>
        {data?.map((value: Data, index) => (
          <div key={index}>
            <div>{value.userId}</div>
            <div>{value.id}</div>
            <div>{value.title}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Sample
