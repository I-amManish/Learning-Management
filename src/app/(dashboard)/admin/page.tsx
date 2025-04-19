"use client"; // Add this if you're not using dynamic imports

import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import UserCards from "@/components/UserCards";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCards type="students" />
          <UserCards type="teachers" />
          <UserCards type="parent" />
          <UserCards type="staff" />
        </div>

        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>

        {/* BOTTOM PLACEHOLDER */}
        {/* <div className="h-[200px] bg-gray-100 rounded-lg">More charts coming soon...</div> */}
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/3">
        {/* Add your sidebar or extra widgets here */}
        r
      </div>
    </div>
  );
};

export default AdminPage;