import React from "react";
import Card from "../ui/dashboard/card/card";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";
import Rightbar from "../ui/dashboard/rightbar/rightbar";

const Dashboard = () => {
  return (
    <div className="flex gap-5 mt-5">
      <div className="flex-[3] flex flex-col gap-5 ">
        <div className="flex justify-between gap-5">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="flex-[1]">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
