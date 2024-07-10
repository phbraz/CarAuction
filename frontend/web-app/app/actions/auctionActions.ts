"use server";

import { Auction, PageResult } from "@/types";
import { cookies, headers } from "next/headers";
import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";

const getData = async (query: string): Promise<PageResult<Auction>> => {
  const res = await fetch(`http://localhost:6001/search${query}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const UpdateAuctionTest = async () => {
  const data = {
    mileage: Math.floor(Math.random() * 1000) + 1,
  };

  const token = await getTokenWorkAround();

  const res = await fetch(
    "http://localhost:6001/auctions/afbee524-5972-4075-8800-7d1f9d7b0a0c",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token?.access_token,
      },
      body: JSON.stringify(data),
    },
  );

  if (!res.ok) {
    return { status: res.status, message: res.statusText };
  }

  return res.statusText;
};

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

export { getData, UpdateAuctionTest, getTokenWorkAround };
