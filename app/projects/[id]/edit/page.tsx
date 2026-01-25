import DashboardLayout from "@/components/DashboardLayout";

export default function EditProjectPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6">Edit Project</h1>

      <form className="max-w-xl space-y-4">
        <input
          defaultValue="Portfolio Website"
          className="w-full px-4 py-3 rounded-md bg-[#181818] border border-white/10"
        />

        <textarea
          defaultValue="A personal portfolio website built with modern tools."
          rows={4}
          className="w-full px-4 py-3 rounded-md bg-[#181818] border border-white/10"
        />

        <select className="w-full px-4 py-3 rounded-md bg-[#181818] border border-white/10">
          <option>Draft</option>
          <option>In Progress</option>
          <option selected>Completed</option>
        </select>

        <button className="px-5 py-2 rounded-lg bg-accent text-dark font-semibold">
          Save Changes
        </button>
      </form>
    </DashboardLayout>
  );
}
