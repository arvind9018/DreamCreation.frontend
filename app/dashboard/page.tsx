import DashboardLayout from "@/components/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-semibold mb-2">
          Dashboard
        </h1>
        <p className="text-gray-400">
          Overview of your projects and activity
        </p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          { label: "Total Projects", value: "12" },
          { label: "Completed", value: "5" },
          { label: "In Progress", value: "4" },
          { label: "Public", value: "3" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#1f1f1f] border border-white/10 rounded-xl p-6"
          >
            <p className="text-gray-400 text-sm mb-2">{item.label}</p>
            <h3 className="text-3xl font-bold">{item.value}</h3>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-3 gap-10">

        {/* Projects */}
        <div className="lg:col-span-2 bg-[#1f1f1f] border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">
            Recent Projects
          </h2>

          <div className="space-y-4">
            {["Portfolio Website", "Dashboard UI", "Landing Page"].map(
              (project, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-4 rounded-lg bg-[#181818] hover:bg-[#222] transition"
                >
                  <span>{project}</span>
                  <button className="text-sm text-accent hover:underline">
                    View
                  </button>
                </div>
              )
            )}
          </div>
        </div>

        {/* Activity */}
        <div className="bg-[#1f1f1f] border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">
            Activity
          </h2>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>✅ Completed “Portfolio Website”</li>
            <li>🚀 Published “Landing Page”</li>
            <li>📝 Updated “Dashboard UI”</li>
            <li>👀 Client viewed your project</li>
          </ul>
        </div>

      </div>

    </DashboardLayout>
  );
}
