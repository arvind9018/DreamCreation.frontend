import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";

const projects = [
  { id: "1", title: "Portfolio Website", status: "Completed" },
  { id: "2", title: "Startup Dashboard", status: "In Progress" },
  { id: "3", title: "Landing Page", status: "Draft" },
];

export default function ProjectsPage() {
  return (
    <DashboardLayout>
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">My Projects</h1>

        <Link
          href="/projects/new"
          className="px-4 py-2 rounded-lg bg-accent text-dark font-semibold"
        >
          + New Project
        </Link>
      </div>
      

      <div className="grid gap-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="p-5 rounded-xl bg-[#1f1f1f] border border-white/10 hover:bg-[#222] transition"
          >
            <h3 className="font-medium">{project.title}</h3>
            <p className="text-sm text-gray-400">
              Status: {project.status}
            </p>
            
          </Link>
        ))}
      </div>
      <button className="mt-6 text-red-400 hover:underline">
  Delete Project
</button>
    </DashboardLayout>
  );
}
