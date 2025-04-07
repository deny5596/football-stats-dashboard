import DashboardLayout from "@components/DashboardLayout";

export default function PlayersPage() {
  return (
    <DashboardLayout
      style={{
        marginTop: "1.2%",
        marginRight: "0.5%",
      }}
    >
      <div className="min-h-screen flex items-center justify-center bg-gray-400 px-4 overflow-y-auto pt-20">
        {" "}
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            👷‍♂️ Under Construction
          </h1>
          <p className="text-gray-600 mb-6">
            This page is currently being built. Please check back later!
          </p>
          <div className="animate-bounce text-4xl">🚧</div>
        </div>
      </div>
    </DashboardLayout>
  );
}
