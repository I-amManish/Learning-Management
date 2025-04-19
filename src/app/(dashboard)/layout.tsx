import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>

      <div className="h-screen flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-white border-r overflow-y-auto">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 lg:justify-start p-4"
            aria-label="Go to homepage"
          >
            <Image
              src="/logo.png"
              alt="School Logo"
              width={32}
              height={32}
              className="min-w-[32px]"
            />
            <span className="hidden lg:block font-semibold text-lg">
              School Name
            </span>
          </Link>
          <Menu />
        </div>

        {/* Main Content */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-y-auto">
          <Navbar />
          <div className="p-4">{children}</div>
        </div>
      </div>
    </>
  );
}
