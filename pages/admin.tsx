import DashboardLayout from "@components/DashboardLayout";

export default function AdminPage() {
  return (
    <DashboardLayout
      style={{
        marginTop: "1.2%",
        marginRight: "0.5%",
      }}
    >
      <div className="flex items-center justify-center bg-gray-400 px-4 min-h-screen">
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            👷‍♂️ Under Construction
          </h1>
          <div className="text-gray-600 mb-6">
            This page is currently being built. Please check back later!
            <p>This would contain features like</p>
            <ul>
              <li>Data tables for further deep data analysis</li>
              <li>Add/Edit Players implemented using Mutations</li>
              <li>CSV Uploads to upload new data for insights</li>
              <li>... and many more</li>
            </ul>
            <div className="animate-bounce text-4xl">🚧</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
