"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import MobileNav from "@/components/MobileNav";
import AssignmentsList from "@/components/AssignmentsList";
import CreateAssignmentForm from "@/components/CreateAssignmentForm";

interface DashboardProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Dashboard = ({ activeTab, setActiveTab }: DashboardProps) => {
  const [mounted, setMounted] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <main className="flex-1 flex flex-col min-w-0 rounded-[16px] overflow-hidden -mt-3" />;
  }

  const renderContent = () => {
    if (activeTab === "create-assignment") {
      return (
        <div className="flex-1 overflow-hidden relative">
          <CreateAssignmentForm setActiveTab={setActiveTab} />
        </div>
      );
    }
    
    if (activeTab === "assignments") {
      return (
        <div className="flex-1 overflow-hidden relative">
          <AssignmentsList setActiveTab={setActiveTab} />
        </div>
      );
    }

    // Default Empty State (Home/Other Tabs)
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 overflow-y-auto">
        <div className="max-w-md w-full flex flex-col items-center text-center space-y-8">
          <div className="relative w-[320px] h-[240px]">
            <Image
              src="/graphic.png"
              alt="No assignments yet"
              fill
              className="object-contain size-75"
              priority
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-[24px] font-bold text-black tracking-tight">
              No assignments yet
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed w-lg">
              Create your first assignment to start collecting and grading
              student submissions. You can set up rubrics, define marking
              criteria, and let AI assist with grading.
            </p>
          </div>
          <button onClick={() => setActiveTab("create-assignment")} className="flex items-center justify-center space-x-2 bg-black text-white rounded-full py-3.5 px-6 hover:bg-gray-800 transition-colors shadow-md">
            <Image src="/plus.svg" alt="Create Assignment" width={16} height={16} />
            <span className="font-medium text-[15px]">
              Create Your First Assignment
            </span>
          </button>
        </div>
      </div>
    );
  };

  const renderMobileContent = () => {
    if (activeTab === "create-assignment") {
      return (
        <div className="flex-1 overflow-hidden relative">
          <CreateAssignmentForm setActiveTab={setActiveTab} />
        </div>
      );
    }

    if (activeTab === "assignments") {
      return (
        <div className="flex-1 overflow-hidden relative">
          <AssignmentsList setActiveTab={setActiveTab} />
        </div>
      );
    }

    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 overflow-y-auto pb-[120px]">
        <div className="w-full max-w-sm flex flex-col items-center text-center space-y-6">
          <div className="relative w-[260px] h-[190px]">
            <Image src="/graphic.png" alt="No assignments yet" fill className="object-contain" priority />
          </div>
          <div className="space-y-3">
            <h2 className="text-[20px] font-bold text-black tracking-tight">
              No assignments yet
            </h2>
            <p className="text-gray-500 text-[14px] leading-relaxed px-2">
              Create your first assignment to start collecting and grading student
              submissions. You can set up rubrics, define marking criteria, and
              let AI assist with grading.
            </p>
          </div>
          <button onClick={() => setActiveTab("create-assignment")} className="flex items-center justify-center space-x-2 bg-[#1e1e1e] text-white rounded-full py-3.5 px-6 hover:bg-black transition-colors shadow-md w-full max-w-[280px]">
            <span className="text-xl font-light leading-none">+</span>
            <span className="font-medium text-[15px]">
              Create Your First Assignment
            </span>
          </button>
        </div>
      </div>
    );
  };

  if (isTabletOrMobile) {
    return (
      <div className="flex flex-col h-full w-full relative overflow-hidden bg-[#F4F4F5]">
        {/* Mobile Header */}
        <header className="m-4 bg-white h-[60px] rounded-[16px] flex items-center justify-between px-4 shrink-0 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="rounded-[6px]  flex items-center justify-center">
               <Image src="/logo.svg" alt="VedaAI Logo" width={20} height={20} className="size-15 p-1 mt-4" />
            </div>
            <span className="-ml-2 font-bold text-[20px] tracking-tight text-black">
              VedaAI
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <button className="relative">
              <Image src="/notification.svg" alt="Notifications" width={22} height={22} />
              <span className="absolute -top-1 -right-0.5 w-2.5 h-2.5 bg-[#F97316] rounded-full border-2 border-white"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-orange-100 overflow-hidden flex items-center justify-center">
              <Image src="/profile.svg" alt="Profile" width={32} height={32} className="w-full h-full object-cover" />
            </div>
            <button>
              <Image src="/menu.svg" alt="Menu" width={24} height={24} />
            </button>
          </div>
        </header>

        {renderMobileContent()}

        {/* Floating Action Button (FAB) */}
        <button onClick={() => setActiveTab("create-assignment")} className="absolute bottom-[104px] right-6 w-14 h-14 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center text-[#F97316] hover:scale-105 transition-transform z-10">
          <span className="text-3xl font-light leading-none pb-1">+</span>
        </button>

        {/* Mobile Bottom Navigation */}
        <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    );
  }

  return (
    <>
      <main className="flex-1 flex flex-col min-w-0 rounded-[16px] overflow-hidden -mt-3 ">
        <header className="h-[56px] bg-white border-b border-gray-200 flex items-center justify-between pr-3 pl-6 shrink-0 m-3 rounded-[16px]">
          <div className="flex items-center space-x-4">
            <button className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
              <Image src="/arrowleft.svg" alt="Back" width={20} height={20} />
            </button>
            <div className="flex items-center space-x-2 text-gray-800">
              <Image
                src="/home.svg"
                alt="Assignment"
                width={20}
                height={20}
                className="opacity-60"
              />
              <span className="font-medium text-lg">Assignment</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Image
                src="/notification.svg"
                alt="Notifications"
                width={20}
                height={20}
              />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#F97316] rounded-full border-2 border-white"></span>
            </button>

            <button className="flex items-center space-x-3 hover:bg-gray-50 p-1.5 pr-3 rounded-full border border-gray-200 transition-colors">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-orange-100 flex items-center justify-center">
                <Image
                  src="/profile.svg"
                  alt="John Doe"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-medium text-sm text-gray-700">
                John Doe
              </span>
              <Image src="/down.svg" alt="Open menu" width={16} height={16} />
            </button>
          </div>
        </header>

        {renderContent()}
      </main>
    </>
  );
};

export default Dashboard;
