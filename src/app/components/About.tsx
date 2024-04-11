'use client'
import LoadingText from '@/app/components/LoadingText'
import { Badge } from '@/components/ui/badge'
import { AboutType } from '@/types/AboutType'
import Image from 'next/image'
import { useEffect, useState } from 'react'

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
        <div className="flex flex-col justify-center items-center w-full py-5 bg-white rounded-md sm:flex-row sm:justify-evenly sm:items-start">
          <div className="flex justify-center py-5 h-full w-[50%] sm:w-[30%]">
            {aboutData?.icon.url ? (
              <Image
                alt="サイト管理者のアイコン"
                src={aboutData.icon.url}
                className="w-[165px] h-[165px] rounded-full"
                width={165}
                height={165}
              />
            ) : (
              <LoadingText
                width="w-[165px]"
                height="h-[165px]"
                rounded="rounded-full"
              />
            )}
          </div>
          <div className="flex flex-col items-center sm:items-start w-[75%] sm:w-[60%]">
            {aboutData?.introduction ? (
              <div className="my-3 text-sm text-slate-500 text-center sm:text-left leading-7">
                {aboutData.introduction}
              </div>
            ) : (
              <LoadingText
                margin="my-3"
                height="h-[100px]"
                rounded="rounded-md"
              />
            )}
            <h2 className="font-bold">注目しているスタック</h2>
            <hr className="my-1 py-1" />
            <div className="flex flex-wrap w-full">
              {aboutData?.badge ? (
                aboutData.badge.map((badge, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="mr-2 mb-2 text-sm"
                  >
                    {badge}
                  </Badge>
                ))
              ) : (
                <LoadingText rounded="rounded-md" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
