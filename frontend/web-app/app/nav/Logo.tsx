"use client";

import React from "react";
import { AiOutlineCar } from "react-icons/ai";
import { useParamsStore } from "@/hooks/useParamsStore";
import { usePathname, useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  const pathName = usePathname();

  const reset = useParamsStore((state) => state.reset);

  const doReset = () => {
    if (pathName !== "/") {
      router.push("/");
      reset();
    }
    reset();
  };

  return (
    <div
      onClick={doReset}
      className="cursor-pointer flex items-center gap-2 text-3xl font-semibold text-red-500"
    >
      <AiOutlineCar size={34} />
      <div>CarAuctions</div>
    </div>
  );
};
export default Logo;
