import Image from "next/image";
import { ThemeToggle } from "./theme";
import Navbar from "./nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <p className="text-lg md:text-xl mb-8 text-center max-w-2xl">
          Test test
        </p>
      </div>
    </div>
  );
}
