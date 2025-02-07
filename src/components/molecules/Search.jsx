import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

export default function Search({className, placeholder}) {
  return (
    <div className="flex items-center bg-white rounded-md border px-2 py-4 h-12">
      <Input className={className} placeholder={placeholder} />

      <Button className="p-[7px] bg-[#6148FF] text-white rounded-[10px] hover:opacity-80" imgSrc={"/assets/search.svg"}>
      </Button>
    </div>
  );
}
