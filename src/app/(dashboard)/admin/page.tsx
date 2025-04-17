import CountChart from "@/components/CountChart";
import UserCards from "@/components/UserCards";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCards type="students" />
          <UserCards type="teachers" />
          <UserCards type="parent" />
          <UserCards type="staff" />
        </div>

        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
          <CountChart />
          </div>
          {/* ATTENDENCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
          </div>
        </div>

        {/* bottom CHARTS */}
        <div className=""></div>

      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};

export default AdminPage;