"use client";

import Dashboard from "@/components/dashboard";
import SideBar from "@/components/Sidebar";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  
  // Track active tab to toggle dashboard content
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    // Schedule state update after first paint
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className="flex h-screen w-full bg-gradient-to-b from-[#EEEEEE] to-[#DADADA] overflow-hidden" />;
  }

  if (isTabletOrMobile) {
    return (
      <div className="h-[100dvh] w-full bg-[#F4F4F5] overflow-hidden">
        <Dashboard activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full bg-gradient-to-b from-[#EEEEEE] to-[#DADADA] p-3 gap-2.5 overflow-hidden">
      {/* Sidebar */}
      <div className="[box-shadow:var(--shadow-realistic)] rounded-[16px]">
        <SideBar activeTab={activeTab} setActiveTab={setActiveTab} /> 
      </div>

      <Dashboard activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
