import { Logo } from "@/components/Shared/Logo";
import { Sidebar } from "@/components/Shared/Sidebar";
import { SidebarMobile } from "@/components/Shared/SidebarMobile/SidebarMobile";

export default function LayoutRoutes({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full">
      <div className="flex justify-between items-center lg:hidden bg-blue-800 px-6 py-3">
        <div className="py-1 text-white">
          <Logo />
        </div>
        <SidebarMobile />
      </div>
      <div className="flex h-full">
        <div className="lg:flex flex-col hidden bg-blue-800 px-4 w-96 max-w-lg h-full text-white">
          <Sidebar />
        </div>
        <div className="w-full">
          <div className="p-6">{children}</div>
        </div>
      </div>
    </main>
  );
}
