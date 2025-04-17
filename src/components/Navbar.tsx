import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-4 p-4">
        {/*SEARCH Bar  */}
        <div className="hidden md:flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-2">
            <Image src="/search.png" alt="search" width={14} height={14} className="" />
            <input 
                type="text"
                placeholder="Search..."
                className="w-[200px] p-2 bg-transparent outline-none placeholder:text-gray-500"
            />
        </div>

        {/* ICONS AND USER */}
        <div className="flex items-center gap-6 justify-end w-full">
            <div className="bg-white rounded-full w-7 h-7 flex
            items-center justify-center cursor-pointer">
                <Image src="/message.png" alt="message" width={20} height={20} className="mx-2" />
            </div>
            <div className="bg-white rounded-full w-7 h-7 flex
            items-center justify-center cursor-pointer relative">
                <Image src="/announcement.png" alt="message" width={20} height={20} className="mx-2" />
                <div className="absolute -top-3 -right-3 w-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">1</div>
            </div>

            <div className="flex flex-col">
                <span className="text-xs leading-3 font-medium">Manish Kumar</span>
                <span className="text-[10px] text-gray-500 text-right">Admin</span>
            </div>

            <Image src={"/avatar.png"} alt="profile" width={36} height={36} className="rounded-full cursor-pointer" />
        </div>
    </div>
  )
}

export default Navbar;