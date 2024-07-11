"use server";

import { Auction, PageResult } from "@/types";
import { cookies, headers } from "next/headers";
import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import fetchWrapper from "@/lib/fetchWrapper";
import { FieldValues } from "react-hook-form";

const getTokenWorkAround = async () => {
  const req = {
    headers: Object.fromEntries(headers() as Headers),
    cookies: Object.fromEntries(
      cookies()
        .getAll()
        .map((c) => [c.name, c.value]),
    ),
  } as NextApiRequest;

  return await getToken({ req });
};

const getData = async (query: string): Promise<PageResult<Auction>> => {
  return await fetchWrapper.get(`search${query}`);
};

const updateAuctionTest = async () => {
  const data = {
    mileage: Math.floor(Math.random() * 1000) + 1,
  };

  return await fetchWrapper.put(
    "auctions/afbee524-5972-4075-8800-7d1f9d7b0a0c",
    data,
  );
};

const createAuction = async (data: FieldValues) => {
  return await fetchWrapper.post("auctions", data);
};

export { getTokenWorkAround, getData, updateAuctionTest, createAuction };
