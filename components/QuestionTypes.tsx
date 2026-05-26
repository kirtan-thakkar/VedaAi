"use client";

import Image from "next/image";
import { useQuestionTypes, QuestionType } from "./hooks/useQuestionTypes";

const QuestionTypes = () => {
  const {
    questionTypes,
    addQuestionType,
    removeQuestionType,
    increment,
    decrement,
    updateQuestionType,
    totalQuestions,
    totalMarks,
  } = useQuestionTypes();

  const questionTypeOptions = [
    "Multiple Choice Questions",
    "Short Questions",
    "Diagram/Graph-Based Questions",
    "Numerical Problems",
    "New Question Type"
  ];

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between items-end max-md:hidden">
        <label className="text-[14px] font-bold text-black">Question Type</label>
        <div className="flex space-x-8 text-[12px] text-black font-medium pr-12">
          <span>No. of Questions</span>
          <span>Marks</span>
        </div>
      </div>
      <div className="md:hidden">
        <label className="text-[14px] font-bold text-black">Question Type</label>
      </div>

      <div className="flex flex-col space-y-3 max-md:space-y-4">
        {questionTypes.map((qt) => (
          <div key={qt.id} className="flex md:items-center max-md:flex-col md:space-x-3 w-full max-md:bg-white max-md:rounded-[24px] max-md:p-3 max-md:shadow-sm max-md:border max-md:border-gray-100 max-md:gap-3">
            {/* Mobile Header: Dropdown + Remove Button */}
            <div className="flex items-center justify-between md:hidden w-full px-1">
              <div className="relative flex items-center">
                <select 
                  value={qt.name}
                  onChange={(e) => updateQuestionType(qt.id, 'name', e.target.value)}
                  className="appearance-none bg-transparent text-[14px] font-bold text-black focus:outline-none pr-5 w-fit"
                >
                  {questionTypeOptions.map(option => <option key={option} value={option}>{option}</option>)}
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Image src="/down.svg" alt="Down" width={12} height={12} />
                </div>
              </div>
              <button onClick={() => removeQuestionType(qt.id)} className="text-black">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Desktop Question Type Dropdown */}
            <div className="relative flex-1 max-md:hidden">
              <select 
                value={qt.name}
                onChange={(e) => updateQuestionType(qt.id, 'name', e.target.value)}
                className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 text-[13px] font-medium text-black bg-white focus:outline-none"
              >
                {questionTypeOptions.map(option => <option key={option} value={option}>{option}</option>)}
              </select>
              <Image src="/down.svg" alt="Down" width={16} height={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Desktop Remove Button */}
            <button onClick={() => removeQuestionType(qt.id)} className="text-gray-400 hover:text-black max-md:hidden shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            {/* Mobile Controls Container */}
            <div className="md:hidden bg-[#F5F5F7] rounded-[24px] p-3 flex items-center justify-between gap-4">
              <div className="flex flex-col items-center gap-1.5 flex-1">
                <span className="text-[12px] font-medium text-black">No. of Questions</span>
                <div className="flex items-center justify-between bg-white rounded-full px-3 py-1.5 w-full">
                  <button onClick={() => decrement(qt.id, 'questions')} className="text-[20px] text-gray-400 font-light leading-none">-</button>
                  <span className="text-[14px] font-bold text-black">{qt.questions}</span>
                  <button onClick={() => increment(qt.id, 'questions')} className="text-[20px] text-gray-400 font-light leading-none">+</button>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1.5 flex-1">
                <span className="text-[12px] font-medium text-black">Marks</span>
                <div className="flex items-center justify-between bg-white rounded-full px-3 py-1.5 w-full">
                  <button onClick={() => decrement(qt.id, 'marks')} className="text-[20px] text-gray-400 font-light leading-none">-</button>
                  <span className="text-[14px] font-bold text-black">{qt.marks}</span>
                  <button onClick={() => increment(qt.id, 'marks')} className="text-[20px] text-gray-400 font-light leading-none">+</button>
                </div>
              </div>
            </div>

            {/* Desktop Controls */}
            <div className="max-md:hidden flex items-center space-x-3">
              <div className="flex items-center justify-between bg-white border border-gray-200 rounded-full px-2 py-2 w-auto">
                <button onClick={() => decrement(qt.id, 'questions')} className="px-2 text-gray-400">-</button>
                <span className="text-[13px] font-bold w-4 text-center">{qt.questions}</span>
                <button onClick={() => increment(qt.id, 'questions')} className="px-2 text-gray-400">+</button>
              </div>
              <div className="flex items-center justify-between bg-white border border-gray-200 rounded-full px-2 py-2 w-auto">
                <button onClick={() => decrement(qt.id, 'marks')} className="px-2 text-gray-400">-</button>
                <span className="text-[13px] font-bold w-4 text-center">{qt.marks}</span>
                <button onClick={() => increment(qt.id, 'marks')} className="px-2 text-gray-400">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={addQuestionType} className="flex items-center space-x-2 w-max mt-4 max-md:mt-2">
        <div className="w-8 h-8 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center text-[20px] leading-none">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </div>
        <span className="text-[14px] font-bold text-black">Add Question Type</span>
      </button>

      <div className="flex flex-col items-end pt-4 space-y-1 pb-2">
        <div className="text-[14px] text-black">
          <span className="font-medium">Total Questions : </span>
          <span className="font-bold">{totalQuestions}</span>
        </div>
        <div className="text-[14px] text-black">
          <span className="font-medium">Total Marks : </span>
          <span className="font-bold">{totalMarks}</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionTypes;
