import { useRouter } from "next/router";
import { TokenUser } from "@interfaces/index";

interface HeaderProps {
  user: TokenUser;
  router: ReturnType<typeof useRouter>;
}

const Header = ({ user, router }: HeaderProps) => {
  return (
    <header
      className="flex justify-between items-center p-6 bg-white shadow-md z-10"
      // style={{ marginTop: "1.3%", marginRight: "0.5%" }}
    >
      <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
      <button
        onClick={async () => {
          await fetch("/api/logout");
          router.push("/login");
        }}
        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
