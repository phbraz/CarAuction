"use client";

import React, { ChangeEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useParamsStore } from "@/hooks/useParamsStore";
import { usePathname, useRouter } from "next/navigation";

const Search = () => {
  const setParams = useParamsStore((state) => state.setParams);
  const setSearchValue = useParamsStore((state) => state.setSearchValue);
  const searchValue = useParamsStore((state) => state.searchValue);
  const router = useRouter();
  const pathName = usePathname();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const search = () => {
    if (pathName !== "/") {
      router.push("/");
    }
    setParams({ searchTerm: searchValue });
  };

  return (
    <div className="flex w-[50%] items-center border-2 rounded-full py-2 shadow-sm">
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            search();
          }
        }}
        onChange={onChange}
        type="text"
        placeholder="Search for cars by make, model or color"
        className="flex-grow pl-5 bg-transparent focus:outline-none border-transparent focus:border-transparent focus:ring-0 text-sm text-gray-600"
        value={searchValue}
      />
      <button onClick={search}>
        <FaSearch
          size={34}
          className="bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2"
        />
      </button>
    </div>
  );
};
export default Search;
