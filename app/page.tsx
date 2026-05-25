import Dashboard from "@/components/dashboard";
import SideBar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen w-full bg-gradient-to-b from-[#EEEEEE] to-[#DADADA] p-3 gap-2.5 overflow-hidden">
      {/* Sidebar */}
      <div className="[box-shadow:var(--shadow-realistic)] rounded-[16px]">
        <SideBar /> 
      </div>

      <Dashboard />

      
    </div>
  );
}
