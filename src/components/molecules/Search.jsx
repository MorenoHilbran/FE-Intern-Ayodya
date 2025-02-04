import React from "react";
import Input from "../atoms/input";
import Button from "../atoms/button";


export default function Search() {
  return (
    <div className="flex items-center bg-white rounded-md border px-2 py-4 h-12 mt-2 mr-4">
      <Input placeholder={"Cari Data"} />
      <Button>
        <img src="/assets/search.svg" alt="Search" />
      </Button>
    </div>
  );
}