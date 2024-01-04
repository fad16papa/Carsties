import React from "react";

type Props = {
  title: string;
  subtitile: string;
  center?: boolean;
};

export default function Heading({ title, subtitile, center }: Props) {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subtitile}</div>
    </div>
  );
}
