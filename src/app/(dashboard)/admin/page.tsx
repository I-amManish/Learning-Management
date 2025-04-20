import AttendanceChart from "@/components/AttendanceChart";
import CountCharts from "@/components/CountCharts";
import EventCalander from "@/components/EventCalander";
import FinanceChart from "@/components/FinanceChart";
import UserCards from "@/components/UserCards";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex justify-between gap-4 flex-wrap">
          <UserCards type="student" />
          <UserCards type="teacher" />
          <UserCards type="parent" />
          <UserCards type="staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountCharts />
          </div>
          {/* ATTANDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
          <AttendanceChart />
          </div>
        </div>

        {/* BOTTOM CHARTS */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/* RIGHT */}

      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalander />
      </div>
    </div>
  );
};

export default AdminPage;