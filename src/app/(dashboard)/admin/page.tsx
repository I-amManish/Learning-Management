import UserCards from "@/components/UserCards";


const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
      {/* USER CARDS */}
      <div className="flex justify-between gap-4 flex-wrap">
        <UserCards type="student"/>
        <UserCards type="teacher"/>
        <UserCards type="parent"/>
        <UserCards type="staff"/>
      </div>
      </div>

      {/* RIGHT */}

      <div className="w-full lg:w-1/3">R</div>
    </div>
  )
}

export default AdminPage;