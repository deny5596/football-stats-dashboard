import { canEditData } from "@utils/roleGuard";
import Link from "next/link";

const Sidebar = ({ user }) => (
  <div className="relative top-0 left-0 w-64 bg-gray-800 text-white p-6 z-20 sidebar">
    <h1 className="text-2xl font-bold mb-6 sidebar logo">
      ⚽ Football Stats Dashboard
    </h1>
    <nav className="flex flex-col gap-4 sidebar logo">
      <Link href="/" className="hover:text-blue-400 transition">
        🏠 Dashboard
      </Link>
      <Link href="/charts" className="hover:text-blue-400 transition">
        📊 Charts
      </Link>
      <Link href="/players" className="hover:text-blue-400 transition">
        👥 Players
      </Link>
      {canEditData(user.role) && (
        <Link href="/admin" className="hover:text-blue-400 transition">
          🛠️ Admin
        </Link>
      )}
    </nav>
  </div>
);

export default Sidebar;
