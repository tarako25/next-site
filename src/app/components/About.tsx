'use client'
import { Badge } from '@/components/ui/badge'
import { AboutType } from '@/types/AboutType'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import adminAvatar from '../../../public/avatar.jpg'

const About = () => {
  const [aboutData, setAboutData] = useState<AboutType>()
  useEffect(() => {
    getAbout()
  }, [])
  const getAbout = async () => {
    const res = await fetch(
      'https://b8c3ubvovg.microcms.io/api/v1/about/03be_fswk0h',
      {
        headers: {
          'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '',
        },
      },
    )
    const data = await res.json()
    setAboutData(data)
  }
  return (
    <>
      <div className="flex flex-col items-center w-full mb-5">
        <div className="flex items-center w-full">
          <span className="w-[18px] h-[30px] base-color"></span>
          <h1 className="w-full my-3 p-3 font-bold text-xl">
            このサイトについて
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center w-full py-5 bg-white rounded-md sm:flex-row sm:justify-evenly sm:items-center">
          <div className="flex justify-center w-[50%] sm:w-[30%]">
            <Image
              alt="サイト管理者のアイコン"
              src={aboutData?.icon.url || adminAvatar}
              className="w-[165px] h-[165px] rounded-full"
              width={165}
              height={165}
            />
          </div>
          <div className="flex flex-col items-center sm:items-start w-[75%] sm:w-[60%]">
            <div className="py-3 text-center sm:text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              quas laborum totam veritatis libero.
            </div>
            <div className="pb-3 text-center sm:text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              blanditiis repellat corporis minima, placeat error.
            </div>
            <h2 className="font-bold">注目しているスタック</h2>
            <hr className="my-1 py-1" />
            <div className="flex flex-wrap">
              {aboutData?.badge.map((badge, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="mr-2 mb-2 text-sm"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
