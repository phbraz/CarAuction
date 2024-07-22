"use client";

import React, { useEffect, useState } from "react";
import { User } from "next-auth";
import { Auction, Bid } from "@/types";
import { useBidsStore } from "@/hooks/useBidsStore";
import { getBidsForAuction } from "@/app/actions/auctionActions";
import toast from "react-hot-toast";
import Heading from "@/app/components/Heading";
import BidItem from "@/app/auctions/details/[id]/BidItem";

interface Props {
  user: User | null;
  auction: Auction;
}

const BidList = ({ user, auction }: Props) => {
  const [loading, setLoading] = useState(true);
  const bids = useBidsStore((state) => state.bids);
  const setBids = useBidsStore((state) => state.setBids);

  useEffect(() => {
    getBidsForAuction(auction.id)
      .then((res: any) => {
        if (res.error) {
          throw res.error;
        }
        setBids(res as Bid[]);
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => setLoading(false));
  }, [auction.id, setLoading, setBids]);

  if (loading) {
    return <span>Loading bids...</span>;
  }

  return (
    <div className="border-2 rounded-lg p-2 bg-gray-100">
      <Heading title="Bids" />
      {bids.map((bid) => (
        <BidItem bid={bid} key={bid.id} />
      ))}
    </div>
  );
};
export default BidList;
