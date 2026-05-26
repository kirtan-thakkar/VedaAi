"use client";

import Image from "next/image";

interface CreateAssignmentFormProps {
  setActiveTab: (tab: string) => void;
}

const CreateAssignmentForm = ({ setActiveTab }: CreateAssignmentFormProps) => {
  return (
    <div className="relative w-full h-full flex flex-col pt-4 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="px-8 max-md:hidden flex flex-col space-y-1 mb-4 shrink-0">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-4 h-4 bg-green-100 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <h1 className="text-[20px] font-bold text-black leading-none">Create Assignment</h1>
        </div>
        <p className="text-[13px] text-gray-500 ml-[24px]">
          Set up a new assignment for your students
        </p>
      </div>

      {/* Header (Mobile) */}
      <div className="md:hidden flex items-center justify-center px-4 mb-4 relative h-12 w-full shrink-0">
        <button onClick={() => setActiveTab("assignments")} className="absolute left-4 p-2 -ml-2 rounded-full hover:bg-gray-200 transition-colors">
          <Image src="/arrowleft.svg" alt="Back" width={20} height={20} />
        </button>
        <h1 className="text-[16px] font-bold text-black text-center">Create Assignment</h1>
      </div>

      {/* Progress Bar */}
      <div className="px-8 max-md:px-4 mb-8 shrink-0">
        <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-black w-1/3 rounded-full"></div>
        </div>
      </div>

      {/* Main Form Container */}
      <div className="px-8 max-md:px-4 pb-24 flex justify-center">
        <div className="w-full max-w-[810px] flex flex-col space-y-8">
          
          <div className="bg-white/50 max-md:bg-transparent backdrop-blur-sm rounded-[24px] max-md:rounded-none max-md:p-0 p-8 flex flex-col space-y-8 shadow-sm max-md:shadow-none border border-white max-md:border-none">
            
            {/* Section Header */}
            <div>
              <h2 className="text-[18px] max-md:text-[16px] font-bold text-black">Assignment Details</h2>
              <p className="text-[13px] text-gray-500">Basic information about your assignment</p>
            </div>

            {/* Upload Area */}
            <div className="flex flex-col space-y-2 text-center">
              <div className="border-2 border-dashed border-gray-200 rounded-[16px] py-10 flex flex-col items-center justify-center space-y-3 bg-white">
                <Image src="/uploadicon.svg" alt="Upload" width={24} height={24} />
                <div className="text-[15px] max-md:text-[14px] font-bold text-black px-4">Choose a file or drag & drop it here</div>
                <div className="text-[12px] text-gray-400">JPEG, PNG, upto 10MB</div>
                <button className="mt-2 px-6 py-2 bg-gray-50 hover:bg-gray-100 text-black text-[13px] font-medium rounded-full border border-gray-200 transition-colors">
                  Browse Files
                </button>
              </div>
              <p className="text-[13px] text-gray-400">Upload images of your preferred document/image</p>
            </div>

            {/* Due Date */}
            <div className="flex flex-col space-y-2">
              <label className="text-[14px] max-md:text-[13px] font-bold text-black">Due Date</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="DD-MM-YYYY" 
                  className="w-full border border-gray-200 rounded-[106px] px-4 py-3.5 text-[14px] bg-white focus:outline-none focus:border-gray-400"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <Image src="/calendar.svg" alt="Calendar" width={20} height={20} />
                </div>
              </div>
            </div>

            {/* Question Types */}
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-end max-md:hidden">
                <label className="text-[14px] font-bold text-black">Question Type</label>
                <div className="flex space-x-8 text-[12px] text-black font-medium pr-12">
                  <span>No. of Questions</span>
                  <span>Marks</span>
                </div>
              </div>
              <div className="md:hidden">
                 <label className="text-[13px] font-bold text-black">Question Type</label>
              </div>
              
              <div className="flex flex-col space-y-3 max-md:space-y-4">
                
                {/* Row 1 */}
                <div className="flex md:items-center max-md:flex-col md:space-x-3 w-full max-md:bg-white max-md:rounded-[106px]  max-md:p-4 max-md:shadow-sm max-md:border max-md:border-gray-100">
                  <div className="flex items-center w-full justify-between md:hidden mb-4">
                     <span className="text-[14px] font-bold text-black">Multiple Choice Questions</span>
                     <button className="text-gray-400 hover:text-black bg-gray-50 rounded-[106px] p-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                     </button>
                  </div>
                  <div className="relative flex-1 max-md:hidden w-full">
                    <select className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 text-[13px] font-medium text-black bg-white focus:outline-none">
                      <option>Multiple Choice Questions</option>
                    </select>
                    <Image src="/down.svg" alt="Down" width={16} height={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  <button className="text-gray-400 hover:text-black max-md:hidden shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                  
                  <div className="flex items-center space-x-3 max-md:w-full max-md:justify-between">
                    <div className="flex flex-col space-y-1 max-md:flex-1">
                      <span className="md:hidden text-[12px] text-gray-500 text-center font-medium">No. of Questions</span>
                      <div className="flex items-center justify-between bg-white border border-gray-200 rounded-full px-2 py-2 w-full md:w-auto">
                        <button className="px-2 text-gray-400">-</button>
                        <span className="text-[13px] font-bold w-4 text-center">4</span>
                        <button className="px-2 text-gray-400">+</button>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1 max-md:flex-1">
                      <span className="md:hidden text-[12px] text-gray-500 text-center font-medium">Marks</span>
                      <div className="flex items-center justify-between bg-white border border-gray-200 rounded-full px-2 py-2 w-full md:w-auto">
                        <button className="px-2 text-gray-400">-</button>
                        <span className="text-[13px] font-bold w-4 text-center">1</span>
                        <button className="px-2 text-gray-400">+</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex md:items-center max-md:flex-col md:space-x-3 w-full max-md:bg-white max-md:rounded-[106px] max-md:p-4 max-md:shadow-sm max-md:border max-md:border-gray-100">
                  <div className="flex items-center w-full justify-between md:hidden mb-4">
                     <span className="text-[14px] font-bold text-black">Short Questions</span>
                     <button className="text-gray-400 hover:text-black bg-gray-50 rounded-[106px] p-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                     </button>
                  </div>
                  <div className="relative flex-1 max-md:hidden w-full">
                    <select className="w-full appearance-none border border-gray-200 rounded-[106px] px-4 py-3 text-[13px] font-medium text-black bg-white focus:outline-none">
                      <option>Short Questions</option>
                    </select>
                    <Image src="/down.svg" alt="Down" width={16} height={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  <button className="text-gray-400 hover:text-black max-md:hidden shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                  
                  <div className="flex items-center space-x-3 max-md:w-full max-md:justify-between">
                    <div className="flex flex-col space-y-1 max-md:flex-1">
                      <span className="md:hidden text-[12px] text-gray-500 text-center font-medium">No. of Questions</span>
                      <div className="flex items-center justify-between bg-white border border-gray-200 rounded-full px-2 py-2 w-full md:w-auto">
                        <button className="px-2 text-gray-400">-</button>
                        <span className="text-[13px] font-bold w-4 text-center">3</span>
                        <button className="px-2 text-gray-400">+</button>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1 max-md:flex-1">
                      <span className="md:hidden text-[12px] text-gray-500 text-center font-medium">Marks</span>
                      <div className="flex items-center justify-between bg-white border border-gray-200 rounded-full px-2 py-2 w-full md:w-auto">
                        <button className="px-2 text-gray-400">-</button>
                        <span className="text-[13px] font-bold w-4 text-center">2</span>
                        <button className="px-2 text-gray-400">+</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 3 (Desktop Only to save space in code preview if needed, keeping for matching spec) */}
                <div className="flex md:items-center max-md:flex-col md:space-x-3 w-full max-md:bg-white max-md:rounded-[16px] max-md:p-4 max-md:shadow-sm max-md:border max-md:border-gray-100 max-md:hidden">
                  <div className="relative flex-1 w-full">
                    <select className="w-full appearance-none border border-gray-200 rounded-[106px] px-4 py-3 text-[13px] font-medium text-black bg-white focus:outline-none">
                      <option>Diagram/Graph-Based Questions</option>
                    </select>
                    <Image src="/down.svg" alt="Down" width={16} height={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  <button className="text-gray-400 hover:text-black shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center bg-white border border-gray-200 rounded-full px-2 py-2">
                      <button className="px-2 text-gray-400">-</button>
                      <span className="text-[13px] font-bold w-4 text-center">5</span>
                      <button className="px-2 text-gray-400">+</button>
                    </div>
                    <div className="flex items-center bg-white border border-gray-200 rounded-full px-2 py-2">
                      <button className="px-2 text-gray-400">-</button>
                      <span className="text-[13px] font-bold w-4 text-center">5</span>
                      <button className="px-2 text-gray-400">+</button>
                    </div>
                  </div>
                </div>

                {/* Row 4 (Desktop Only) */}
                <div className="flex md:items-center max-md:flex-col md:space-x-3 w-full max-md:bg-white max-md:rounded-[16px] max-md:p-4 max-md:shadow-sm max-md:border max-md:border-gray-100 max-md:hidden">
                  <div className="relative flex-1 w-full">
                    <select className="w-full appearance-none border border-gray-200 rounded-[106px] px-4 py-3 text-[13px] font-medium text-black bg-white focus:outline-none">
                      <option>Numerical Problems</option>
                    </select>
                    <Image src="/down.svg" alt="Down" width={16} height={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  <button className="text-gray-400 hover:text-black shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center bg-white border border-gray-200 rounded-full px-2 py-2">
                      <button className="px-2 text-gray-400">-</button>
                      <span className="text-[13px] font-bold w-4 text-center">5</span>
                      <button className="px-2 text-gray-400">+</button>
                    </div>
                    <div className="flex items-center bg-white border border-gray-200 rounded-full px-2 py-2">
                      <button className="px-2 text-gray-400">-</button>
                      <span className="text-[13px] font-bold w-4 text-center">5</span>
                      <button className="px-2 text-gray-400">+</button>
                    </div>
                  </div>
                </div>
              </div>

              <button className="flex items-center justify-center max-md:w-full space-x-2 w-max mt-4 max-md:bg-white max-md:py-3.5 max-md:rounded-full max-md:border max-md:border-gray-200">
                <div className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-[16px] leading-none pb-0.5">+</div>
                <span className="text-[13px] font-bold text-black">Add Question Type</span>
              </button>

              <div className="flex flex-col items-end max-md:items-center pt-4 space-y-1 pb-2">
                <div className="text-[13px]">
                  <span className="font-bold text-black">Total Questions: </span>
                  <span className="text-black font-medium">25</span>
                </div>
                <div className="text-[13px]">
                  <span className="font-bold text-black">Total Marks: </span>
                  <span className="text-black font-medium">60</span>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="flex flex-col space-y-2">
              <label className="text-[14px] max-md:text-[13px] font-bold text-black">Additional Information <span className="font-normal text-gray-500">(For better output)</span></label>
              <div className="relative">
                <textarea 
                  placeholder="e.g Generate a question paper for 3 hour exam duration..."
                  className="w-full h-[132px] border border-gray-200 rounded-[16px] p-4 text-[13px] bg-gray-50 focus:bg-white focus:outline-none focus:border-gray-400 resize-none"
                ></textarea>
                <button className="absolute bottom-4 right-4 text-gray-500 hover:text-black">
                  <Image src="/mic.svg" alt="Mic" width={16} height={16} />
                </button>
              </div>
            </div>
            
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 max-md:mt-4 max-md:mb-8">
            <button onClick={() => setActiveTab("assignments")} className="px-6 py-3 bg-white text-black text-[14px] font-medium rounded-full flex items-center space-x-2 border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">
              <span>&larr;</span>
              <span>Previous</span>
            </button>
            <button className="px-8 py-3 bg-black text-white text-[14px] font-medium rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.1)]">
              <span>Next</span>
              <span>&rarr;</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateAssignmentForm;
