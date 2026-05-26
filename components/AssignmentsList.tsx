"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface AssignmentsListProps {
  setActiveTab: (tab: string) => void;
}

const AssignmentsList = ({ setActiveTab }: AssignmentsListProps) => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const assignments = Array(8).fill({
    title: "Quiz on Electricity",
    assignedDate: "20-06-2025",
    dueDate: "21-06-2025",
  });

  // Close the popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col pt-4 max-md:pt-0">
      {/* Header Section (Desktop) */}
      <div className="px-8 flex flex-col space-y-1 mb-6 max-md:hidden">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-4 h-4 bg-green-100 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <h1 className="text-[20px] font-bold text-black leading-none">Assignments</h1>
        </div>
        <p className="text-[13px] text-gray-500 ml-[24px]">
          Manage and create assignments for your classes.
        </p>
      </div>

      {/* Header Section (Mobile) */}
      <div className="md:hidden flex items-center justify-center px-4 mb-4 relative h-12 w-full shrink-0">
        <button className="absolute left-4 p-2 -ml-2 rounded-full hover:bg-gray-200 transition-colors">
          <Image src="/arrowleft.svg" alt="Back" width={20} height={20} />
        </button>
        <h1 className="text-[16px] font-bold text-black text-center">Assignments</h1>
      </div>

      {/* Filter and Search Bar */}
      <div className="px-8 max-md:px-4 flex md:items-center md:justify-between mb-4 w-full">
        {/* Desktop Filter */}
        <button className="max-md:hidden flex items-center space-x-2 text-gray-500 hover:text-black transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          <span className="text-[14px]">Filter By</span>
        </button>

        {/* Desktop Search */}
        <div className="max-md:hidden relative w-full max-w-[320px]">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
               <circle cx="11" cy="11" r="8"></circle>
               <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
             </svg>
          </div>
          <input
            type="text"
            placeholder="Search Assignment"
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-full text-[14px] focus:outline-none focus:border-gray-400 bg-white"
          />
        </div>

        {/* Mobile Combined Filter & Search container */}
        <div className="md:hidden flex items-center w-full bg-white border border-gray-200 rounded-full px-4 py-3 space-x-3 shadow-sm">
          <button className="flex items-center space-x-1.5 text-gray-400 shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            <span className="text-[13px]">Filter</span>
          </button>
          <div className="w-px h-4 bg-gray-200 shrink-0"></div>
          <div className="flex items-center space-x-2 flex-1">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 shrink-0">
               <circle cx="11" cy="11" r="8"></circle>
               <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
             </svg>
             <input
              type="text"
              placeholder="Search Name"
              className="w-full text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-transparent bg-transparent"
             />
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="px-8 max-md:px-4 flex-1 overflow-y-auto pb-[120px] max-md:pb-[140px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-md:gap-3">
          {assignments.map((assignment, index) => (
            <div
              key={index}
              className="bg-white rounded-[16px] max-md:rounded-[12px] p-5 max-md:p-4 flex flex-col justify-between h-[162px] max-md:h-[116px] shadow-sm border border-gray-100 relative group cursor-pointer hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-[18px] max-md:text-[15px] font-bold text-black tracking-tight">
                  {assignment.title}
                </h3>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenuIndex(openMenuIndex === index ? null : index);
                  }}
                  className="text-gray-400 hover:text-black p-1 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                </button>
              </div>

              {/* Functional Popup for this specific card */}
              {openMenuIndex === index && (
                <div ref={menuRef} className="absolute top-12 right-4 bg-white rounded-xl shadow-lg border border-gray-100 p-2 w-[160px] z-20 flex flex-col space-y-1">
                  <button className="text-left px-3 py-2 text-[13px] text-black hover:bg-gray-50 rounded-lg transition-colors">
                    View Assignment
                  </button>
                  <button className="text-left px-3 py-2 text-[13px] text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                    Delete
                  </button>
                </div>
              )}

              <div className="flex items-center justify-between max-md:justify-start max-md:space-x-4 text-[13px] max-md:text-[11px] w-full">
                <div className="flex space-x-1">
                  <span className="font-bold text-black">Assigned on :</span>
                  <span className="text-gray-500">{assignment.assignedDate}</span>
                </div>
                <div className="flex space-x-1">
                  <span className="font-bold text-black">Due :</span>
                  <span className="text-gray-500">{assignment.dueDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Bottom Button (Desktop Only) */}
      <div className="max-md:hidden absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#EAEAEA]/90 to-transparent backdrop-blur-[2px] flex items-end justify-center pb-8 z-10 pointer-events-none rounded-b-[16px]">
        <button className="pointer-events-auto flex items-center justify-center space-x-2 bg-black text-white rounded-full py-3 px-6 hover:bg-gray-800 transition-colors shadow-lg">
          <span className="text-lg font-light leading-none">+</span>
          <span className="font-medium text-[15px]">Create Assignment</span>
        </button>
      </div>
    </div>
  );
};

export default AssignmentsList;
