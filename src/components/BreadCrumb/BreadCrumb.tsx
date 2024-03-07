"use client";
import { firstCharUpper } from "@/utils/utils";
import React, { useEffect, useState } from "react";

const BreadCrumb = () => {
  const [path, setPath] = useState<string[]>([]);
  useEffect(() => {
    const pathname = window.location.pathname;

    setPath(pathname.split("/"));
  }, []);

  return (
    <div className='lg:px-14 px-[.88rem]'>
      <p className='text-sm text-[#3E5765]'>
        Cryptocurrencies
        <span>{" >> "}</span>
        {path.map((segment, index) => (
          <React.Fragment key={index}>
            {index > 0}
            <span className='text-[#0F1629]'>{firstCharUpper(segment)}</span>
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default BreadCrumb;
