import EmptyFilter from "@/app/components/EmptyFilter";
import React from "react";

export function pages({
  searchParams,
}: {
  searchParams: { callbackUrl: string };
}) {
  <EmptyFilter
    title="You need to be logged in"
    subtitle="Please click below to sign in"
    showLogin
    callbackUrl={searchParams.callbackUrl}
  />;
}

export default pages;
