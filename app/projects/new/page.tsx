import DashboardLayout from "@/components/DashboardLayout";

export default function NewProjectPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6">Create New Project</h1>

      <form className="max-w-xl space-y-4">
        <input
          placeholder="Project Title"
          className="w-full px-4 py-3 rounded-md bg-[#181818] border border-white/10"
        />

        <textarea
          placeholder="Project Description"
          rows={4}
          className="w-full px-4 py-3 rounded-md bg-[#181818] border border-white/10"
        />

        <select className="w-full px-4 py-3 rounded-md bg-[#181818] border border-white/10">
          <option>Status</option>
          <option>Draft</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button className="px-5 py-2 rounded-lg bg-accent text-dark font-semibold">
          Create Project
        </button>
      </form>
    </DashboardLayout>
  );
}
