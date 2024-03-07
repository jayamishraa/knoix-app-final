"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IMenuItem {
  name: string;
  isActive: boolean;
  link: string;
}

const MenuBar = () => {
  const [menuItems, setMenuItems] = useState<IMenuItem[]>([
    {
      name: "Overview",
      isActive: true,
      link: "#",
    },
    {
      name: "Fundamentals",
      isActive: false,
      link: "#performanceCard",
    },
    {
      name: "News Insights",
      isActive: false,
      link: "#sentimentCard",
    },
    {
      name: "Sentiments",
      isActive: false,
      link: "#sentimentCard",
    },
    {
      name: "Team",
      isActive: false,
      link: "#teamCard",
    },
    {
      name: "Technicals",
      isActive: false,
      link: "#",
    },
    {
      name: "Tokenomics",
      isActive: false,
      link: "#tokenomicCard",
    },
  ]);

  const handleClick = (item: string) => {
    const newMenuItems = menuItems.map((menuItem) => {
      if (menuItem.name === item) {
        return { ...menuItem, isActive: true };
      }
      return { ...menuItem, isActive: false };
    });
    setMenuItems(newMenuItems);
  };

  return (
    <>
      {menuItems.map((item: IMenuItem) => {
        return (
          <Link
            onClick={() => {
              handleClick(item.name);
            }}
            href={item.link}
            key={item.name}
            className={`
            min-w-fit
            hover:cursor-pointer
            ${
              item.isActive
                ? "text-[#0141CF] border-b-2 border-blue-700 font-semibold"
                : "font-medium text-[#3E424A]"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </>
  );
};

export default MenuBar;
