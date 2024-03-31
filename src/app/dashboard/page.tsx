import UserTable from "@/components/tables/UserTable";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center text-center w-full mx-7">
      <h1 className="font-bold text-[25px]">User Data</h1>
      <UserTable />
    </div>
  );
};

export default page;
