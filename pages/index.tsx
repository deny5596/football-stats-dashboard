import { Suspense } from "react";
import PlayerList from "@components/PlayerList";
import Loading from "@components/Loading";
import DashboardLayout from "@components/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout style={{}}>
      <Suspense fallback={<Loading />}>
        <section className="mt-6 bg-gray-400">
          <h1 className="text-xl font-semibold mb-2 text-center">
            👥 Player Table
          </h1>
          <PlayerList />
        </section>
      </Suspense>
    </DashboardLayout>
  );
}
