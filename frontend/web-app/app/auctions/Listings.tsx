"use client";

import React, { Fragment, useEffect, useState } from "react";
import AuctionCard from "./AuctionCard";
import { Auction, PagedResult } from "@/types/Index";
import AppPagination from "../components/AppPagination";
import { getData } from "../actions/AuctionActions";
import Filters from "./Filters";
import { userParamsStore } from "@/hooks/useParamsStore";
import { shallow } from "zustand/shallow";
import qs from "query-string";

export default function Listings() {
  const [data, setData] = useState<PagedResult<Auction>>();
  const params = userParamsStore(
    (state) => ({
      pageNumber: state.pageNumber,
      pageSize: state.pageSize,
      searchTerm: state.searchTerm,
      orderBy: state.orderBy,
    }),
    shallow
  );

  const setParams = userParamsStore((state) => state.setParams);

  const url = qs.stringifyUrl({ url: "", query: params });

  function setPageNumber(pageNumber: number) {
    setParams({ pageNumber });
  }

  useEffect(() => {
    getData(url).then((data) => {
      setData(data);
    });
  }, [url]);

  if (!data) return <h3>Loading....</h3>;

  return (
    <Fragment>
      <Filters />
      <div className="grid grid-cols-4 gap-6">
        {data.results.map((auction) => (
          <AuctionCard auction={auction} key={auction.id} />
        ))}
      </div>
      <div className="flex justify-center m-4">
        <AppPagination
          pageChange={setPageNumber}
          currentPage={params.pageNumber}
          pageCount={data.pageCount}
        />
      </div>
    </Fragment>
  );
}
