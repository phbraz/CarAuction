"use server";

import { Auction, PageResult } from "@/types";
import { cookies, headers } from "next/headers";
import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import fetchWrapper from "@/lib/fetchWrapper";
import { FieldValues } from "react-hook-form";
import { revalidatePath } from "next/cache";

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

const getDetailedViewData = async (id: string): Promise<Auction> => {
  return await fetchWrapper.get(`auctions/${id}`);
};

const updateAuction = async (data: FieldValues, id: string) => {
  const res = await fetchWrapper.put(`auctions/${id}`, data);
  revalidatePath(`/auctions/${id}`);
  return res;
};

const deleteAuction = async (id: string) => {
  return await fetchWrapper.del(`auctions/${id}`);
};

export {
  getTokenWorkAround,
  getData,
  updateAuctionTest,
  createAuction,
  getDetailedViewData,
  updateAuction,
  deleteAuction,
};
