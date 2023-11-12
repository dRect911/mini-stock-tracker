"use client";

import React from "react";
import {
  House,
  Users,
  ShoppingBag,
  CurrencyDollarSimple,
  ChartLineUp,
  ChartBar,
  UsersFour,
  Gear,
  Question,
  SignOut,
} from "@phosphor-icons/react";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <House size={24} />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <Users size={24} />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <ShoppingBag size={24} />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <CurrencyDollarSimple size={24} />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <ChartLineUp size={24} />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <ChartBar size={24} />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <UsersFour size={24} />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <Gear size={24} />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <Question size={24} />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className=" sticky top-10">
      <div className="flex items-center gap-5 mb-5">
        <Image className="object-cover rounded-full " src="/dummy-avatar.jpg" height="50" width="50" alt="avatar" />
        <div className="flex flex-col">
          <span className='font-medium' >John Doe</span>
          <span className='text-neutral-400 text-sm ' >Administrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-sm text-neutral-500">{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className="flex pl-4 py-2 m-1 gap-2 font-medium rounded-md hover:bg-neutral-100 duration-300 w-full" >
      <SignOut size={24} />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
