"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { deleteAuction } from "@/app/actions/auctionActions";
import toast from "react-hot-toast";
import { Button } from "flowbite-react";

interface Props {
  id: string;
}

const DeleteButton = ({ id }: Props) => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const doDelete = () => {
    setLoading(true);
    deleteAuction(id)
      .then((res) => {
        if (res.error) throw res.error;
        router.push("/");
      })
      .catch((error) => {
        toast.error(error.status + " " + error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Button color="failure" isProcessing={loading} onClick={doDelete}>
      Delete Auction
    </Button>
  );
};
export default DeleteButton;
