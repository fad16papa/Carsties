"use client";

import React, { Fragment, useEffect, useState } from "react";
import AuctionCard from "./AuctionCard";
import { Auction } from "@/types/Index";
import AppPagination from "../components/AppPagination";
import { getData } from "../actions/AuctionActions";

export default function Listings() {
  const [auctions, setAuctions] = useState<Auction[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [pageNumber, setPagenumber] = useState(1);

  useEffect(() => {
    getData(pageNumber).then((data) => {
      setAuctions(data.results);
      setPageCount(data.pageCount);
    });
  }, [pageNumber]);

  if (auctions.length === 0) return <h3>Loading....</h3>;

  return (
    <Fragment>
      <div className="grid grid-cols-4 gap-6">
        {auctions.map((auction) => (
          <AuctionCard auction={auction} key={auction.id} />
        ))}
      </div>
      <div className="flex justify-center m-4">
        <AppPagination
          pageChange={setPagenumber}
          currentPage={pageNumber}
          pageCount={pageCount}
        />
      </div>
    </Fragment>
  );
}
