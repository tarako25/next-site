import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-start w-full mb-5">
        <div className="flex items-center w-full">
          <span className="w-[18px] h-[30px] base-color"></span>
          <h1 className="w-full my-3 p-3 font-bold text-xl">お問い合わせ</h1>
        </div>
        <div className="flex flex-col items-center justify-center w-[100%] bg-white rounded-md py-5">
          <div className="w-[90%]">
            <Label htmlFor="email" className="px-2">
              メールアドレス(必須)
            </Label>
            <Input
              type="email"
              id="email"
              required
              placeholder=""
              className="w-[70%] bg-slate-100 my-3"
            />
            <Label htmlFor="message" className="p-2">
              問い合わせ内容(必須)
            </Label>
            <Textarea placeholder="" id="message" required className="my-3 bg-slate-100" />
          </div>
          <div className="w-[90%] flex justify-end">
            <Link href="articles" className={`${buttonVariants({ variant: "outline" })} mt-2 px-7`}>
              送信
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
