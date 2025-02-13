import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

export default function Search({ className = "", placeholder, size }) {
  const sizeClass = size === "large" ? "w-[526px] h-[62px]" : "h-12";

  return (
    <div className={`flex items-center bg-white rounded-md border px-2 ${sizeClass} ${className}`}>
      
      <Input className="flex-grow px-2 py-2 outline-none" placeholder={placeholder} />

     
      <Button
        type="button"
        className="p-[7px] bg-[#6148FF] text-white rounded-[10px] hover:opacity-80 flex items-center justify-center"
        imgSrc="/assets/search.svg"
      />
    </div>
  );
}
