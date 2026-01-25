import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";

export default function ProjectDetailPage() {
  return (
    <DashboardLayout>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Portfolio Website</h1>

        <Link
          href="/projects/1/edit"
          className="text-accent hover:underline"
        >
          Edit
        </Link>
      </div>

      <div className="bg-[#1f1f1f] border border-white/10 rounded-xl p-6">
        <p className="text-gray-400 mb-4">
          A personal portfolio website built with modern tools.
        </p>

        <p className="text-sm text-gray-500">
          Status: Completed
        </p>
      </div>
    </DashboardLayout>
  );
}
