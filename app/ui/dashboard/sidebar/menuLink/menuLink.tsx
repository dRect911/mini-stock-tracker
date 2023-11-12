"use client"

import React from "react";
import Link from "next/link";
import { Icon } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";

const MenuLink = ({
  item,
}: {
  item: { title: string; path: string; icon: React.JSX.Element };
}) => {

    const pathname = usePathname()
  return (
    <Link href={item.path} className={`flex pl-4 py-2 m-1 gap-2 font-medium rounded-md hover:bg-neutral-100 duration-300 ${pathname === item.path ? 'bg-neutral-100' : ''} `}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
