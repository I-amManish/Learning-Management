import  UserCards  from "@/components/UserCards"


const AdminPage = () => {
  return (
    <div className='p-4 flex gap4 flex-col md:flex-row'>
      {/* LEFT */}
      <div className='w-full lg:h-2/3'>l</div>

      {/* User Cards */}
      <div className="flex gap-4 justify-between">
        <UserCards type="/student" />
        <UserCards type="/teacher" />
        <UserCards type="/parent" />
        <UserCards type="/staff" />
      </div>


      {/* RIGHT */} 
      <div className='w-full lg:h-1/3'>r</div>
    </div>
  )
}

export default AdminPage