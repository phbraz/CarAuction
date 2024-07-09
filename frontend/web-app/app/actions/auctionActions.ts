"use server";

import { Auction, PageResult } from "@/types";

const getData = async (query: string): Promise<PageResult<Auction>> => {
  const res = await fetch(`http://localhost:6001/search${query}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export { getData };
