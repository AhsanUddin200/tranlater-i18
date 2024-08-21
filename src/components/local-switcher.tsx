"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useTransition } from "react";
import { BsTranslate } from "react-icons/bs";
import { useLocale } from "next-intl";
export default function LocalSwitcher() {
  const [ isPending, startTransition ] = useTransition()
  const router = useRouter();

  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    //  console.log(e.target.value)
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}`);
       startTransition(() => {

      })
  };
  return (
    <label className="border-2 rounded">
      <p className="sr-only">Click Change Language</p>
      <div className="flex items-center space-x-2">
        <BsTranslate className="text-white" />
        <select
          defaultValue={localActive}
          className="bg-transparent py-2 px-4 hover:scale-105"
          onChange={onSelectChange}
          disabled = {isPending}
          
        >
          <option value="en" className="text-black">English</option>
          <option value="id" className="text-black">Spanish</option>
        </select>
      </div>
    </label>
  );
}
