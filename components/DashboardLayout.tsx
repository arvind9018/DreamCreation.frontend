import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-64 bg-[#121212] min-h-screen px-6 py-10">
        {children}
      </main>

    </div>
  );
}
