import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Sidebar from "@components/Sidebar";
import Header from "@components/Header";
import Loading from "@components/Loading";

import { User } from "@interfaces/index";

interface DashboardLayoutProps {
  children: ReactNode;
  style: {};
}

export default function DashboardLayout({
  children,
  style,
}: DashboardLayoutProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/user")
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => setUser(data.user))
      .catch(() => router.replace("/login"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (!user) return null;

  return (
    <div className="flex min-h-screen min-w-screen bg-gray-300" style={style}>
      <Sidebar user={user} />
      <div className="flex-1 ml-auto">
        <Header user={user} router={router} />
        <main className="flex-1 p-6 mt-12">{children}</main>
      </div>
    </div>
  );
}
