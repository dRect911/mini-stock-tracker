"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  Bell,
  Chat,
  GlobeHemisphereWest,
  MagnifyingGlass,
} from "@phosphor-icons/react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between bg-neutral-50 p-5 rounded-lg">
      <div className="text-neutral-600 font-bold capitalize text-lg">{pathname.split("/").pop()}</div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 p-2 rounded-lg bg-neutral-100">
          <MagnifyingGlass size={24} />
          <input type="text" placeholder="Search..." className="bg-neutral-100 focus:outline-none text-neutral-600" />
        </div>
        <div className="flex items-center gap-5">
          <Chat size={24} />
          <Bell size={24} />
          <GlobeHemisphereWest size={24} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
