import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full mb-5">
        <div className="flex items-center w-full">
          <span className="w-[18px] h-[30px] bg-sky-400"></span>
          <h1 className="w-full my-3 p-3 font-bold text-xl">お問い合わせ</h1>
        </div>
        <div className="flex flex-col justify-center w-full bg-white rounded-md p-5">
          <div className="w-[80%]">
            <Label htmlFor="email" className="p-2">
              メールアドレス
            </Label>
            <Input type="email" id="email" placeholder="" className="w-[500px] mb-5" />
            <Label htmlFor="message" className="p-2">
              問い合わせ内容
            </Label>
            <Textarea placeholder="" id="message" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
