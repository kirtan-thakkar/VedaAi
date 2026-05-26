"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface AssignmentOutputProps {
  setActiveTab: (tab: string) => void;
}

const AssignmentOutput = ({ setActiveTab }: AssignmentOutputProps) => {
  return (
    <div className="relative w-full h-full flex flex-col pt-4 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
      {/* Mobile Header (similar to CreateAssignmentForm) */}
      <div className="md:hidden flex items-center justify-center px-4 mb-4 relative h-12 w-full shrink-0">
        <button
          onClick={() => setActiveTab("assignments")}
          className="absolute left-4 p-2 -ml-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          <Image src="/arrowleft.svg" alt="Back" width={20} height={20} />
        </button>
        <h1 className="text-[16px] font-bold text-black text-center">
          Assignment Output
        </h1>
      </div>

      <div className="px-8 max-md:px-4 pb-24 flex justify-center">
        <div className="w-full max-w-[1060px] flex flex-col space-y-6">
          
          {/* AI Message Card */}
          <div className="bg-[#181818CC] backdrop-blur-sm rounded-[32px] p-8 max-md:p-6 flex flex-col space-y-6 text-white border border-white/10">
            <p className="text-[16px] max-md:text-[14px] font-medium leading-relaxed">
              Certainly, Lakshya! Here are customized Question Paper for your CBSE Grade 8 Science classes on the NCERT chapters:
            </p>
            <button className="flex items-center space-x-2 bg-white text-black rounded-full px-6 py-3 w-fit hover:bg-gray-100 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              <span className="text-[14px] font-bold">Download as PDF</span>
            </button>
          </div>

          {/* Question Paper Card */}
          <div className="bg-white rounded-[32px] p-8 max-md:p-6 shadow-sm border border-gray-100 flex flex-col space-y-8">
            {/* School Header */}
            <div className="text-center space-y-2">
              <h2 className="text-[24px] max-md:text-[18px] font-bold text-black uppercase tracking-tight">
                Delhi Public School, Sector-4, Bokaro
              </h2>
              <div className="space-y-1">
                <p className="text-[18px] max-md:text-[14px] font-bold text-black">Subject: English</p>
                <p className="text-[18px] max-md:text-[14px] font-bold text-black">Class: 5th</p>
              </div>
            </div>

            {/* Time & Marks */}
            <div className="flex justify-between items-center text-[14px] max-md:text-[12px] font-bold text-black border-b border-gray-100 pb-4">
              <span>Time Allowed: 45 minutes</span>
              <span>Maximum Marks: 20</span>
            </div>

            {/* General Instructions */}
            <div className="space-y-4">
              <p className="text-[14px] max-md:text-[13px] font-bold text-black">
                All questions are compulsory unless stated otherwise.
              </p>
              
              <div className="space-y-2 max-w-[300px]">
                <div className="flex items-end space-x-2">
                  <span className="text-[14px] font-bold text-black whitespace-nowrap">Name:</span>
                  <div className="flex-1 border-b border-black mb-1"></div>
                </div>
                <div className="flex items-end space-x-2">
                  <span className="text-[14px] font-bold text-black whitespace-nowrap">Roll Number:</span>
                  <div className="flex-1 border-b border-black mb-1"></div>
                </div>
                <div className="flex items-end space-x-2">
                  <span className="text-[14px] font-bold text-black whitespace-nowrap">Class: 5th Section:</span>
                  <div className="flex-1 border-b border-black mb-1"></div>
                </div>
              </div>
            </div>

            {/* Section A */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-[18px] max-md:text-[16px] font-bold text-black underline underline-offset-4">Section A</h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-[15px] max-md:text-[14px] font-bold text-black italic">Short Answer Questions</p>
                  <p className="text-[13px] text-gray-600 italic">Attempt all questions. Each question carries 2 marks</p>
                </div>

                <div className="space-y-4 pl-2">
                  {[
                    "Define electroplating. Explain its purpose. [2 Marks]",
                    "What is the role of a conductor in the process of electrolysis? [2 Marks]",
                    "Why does a solution of copper sulfate conduct electricity? [2 Marks]",
                    "Describe one example of the chemical effect of electric current in daily life. [2 Marks]",
                    "Explain why electric current is said to have chemical effects. [2 Marks]",
                    "How is sodium hydroxide prepared during the electrolysis of brine? Write the chemical reaction involved. [2 Marks]",
                    "What happens at the cathode and anode during the electrolysis of water? Name the gases evolved. [2 Marks]",
                    "Mention the type of current used in electroplating and justify why it is used. [2 Marks]",
                    "What is the importance of electric current in the field of metallurgy? [2 Marks]",
                    "Explain with a chemical equation how copper is deposited during the electroplating of an object. [2 Marks]"
                  ].map((q, i) => (
                    <div key={i} className="flex space-x-3 text-[14px] max-md:text-[13px] text-black leading-relaxed">
                      <span className="font-bold shrink-0">{i + 1}.</span>
                      <p><span className="font-bold text-gray-500 mr-1">[{i % 3 === 0 ? "Easy" : i % 3 === 1 ? "Moderate" : "Challenging"}]</span> {q}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[14px] font-bold text-black pt-4">End of Question Paper</p>
              </div>
            </div>

            {/* Answer Key */}
            <div className="space-y-6 pt-8 border-t border-gray-100">
              <h3 className="text-[18px] max-md:text-[16px] font-bold text-black">Answer Key:</h3>
              <div className="space-y-6 pl-2">
                {[
                  "Electroplating is the process of depositing a thin layer of metal on the surface of another metal using electric current. Its purpose is to prevent corrosion, improve appearance, or increase thickness.",
                  "A conductor allows the flow of electric current, causing ions in the electrolyte to move and enabling chemical changes at electrodes.",
                  "Copper sulfate solution contains free copper and sulfate ions which carry electric charge, thus conducting electricity.",
                  "An example is the electroplating of silver on jewelry to prevent tarnishing.",
                  "Electric current causes the movement of ions leading to chemical changes at the electrodes, hence it shows chemical effects."
                ].map((a, i) => (
                  <div key={i} className="flex space-x-3 text-[14px] max-md:text-[13px] text-black leading-relaxed">
                    <span className="font-bold shrink-0">{i + 1}.</span>
                    <p>{a}</p>
                  </div>
                ))}
                
                {/* Chemical Equation Example */}
                <div className="pl-6 space-y-2 text-[14px] max-md:text-[13px] font-medium text-black">
                  <p>2H2O + 2e⁻ → H2 + 2OH⁻</p>
                  <p>Na+ + OH- → NaOH (in solution)</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentOutput;
