import React from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";

const Layout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className={` flex`} > {/* container */}
      <div className={`flex-[1] bg-neutral-50 p-5`}> {/* menu */}
        <Sidebar />
      </div>
      <div className={`flex-[4] p-5`}> {/* content */}
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
