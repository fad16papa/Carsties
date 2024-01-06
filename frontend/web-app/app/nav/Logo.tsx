"use client";

import { userParamsStore } from "@/hooks/useParamsStore";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaCar } from "react-icons/fa";

export default function Logo() {
  const router = useRouter();
  const pathName = usePathname();
  const reset = userParamsStore((state) => state.reset);

  function doReset() {
    if (pathName !== "/") router.push("/");
    reset();
  }

  return (
    <div
      onClick={doReset}
      className="cursor-pointer flex items-center gap-2 text-3xl font-semibold text-red-500"
    >
      <FaCar size={34} />
      <div>Carsties Auctions</div>
    </div>
  );
}
