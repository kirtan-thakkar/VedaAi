"use client";

import Image from "next/image";
import { useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import QuestionTypes from "./QuestionTypes";

interface CloudinaryUploadResult {
  event: "success";
  info: {
    secure_url: string;
    original_filename: string;
  };
}

interface CreateAssignmentFormProps {
  setActiveTab: (tab: string) => void;
}

const CreateAssignmentForm = ({ setActiveTab }: CreateAssignmentFormProps) => {
  const [uploadedFile, setUploadedFile] = useState<{
    name: string;
    url: string;
  } | null>(null);
  const [date, setDate] = useState<Date>();

  const handleUploadSuccess = (result: unknown) => {
    const uploadResult = result as CloudinaryUploadResult;
    if (uploadResult.event === "success") {
      setUploadedFile({
        name: uploadResult.info.original_filename,
        url: uploadResult.info.secure_url,
      });
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col pt-4 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
      <div className="px-8 max-md:hidden flex flex-col space-y-1 mb-4 shrink-0">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-4 h-4 bg-green-100 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <h1 className="text-[20px] font-bold text-black leading-none">
            Create Assignment
          </h1>
        </div>
        <p className="text-[13px] text-gray-500 ml-6">
          Set up a new assignment for your students
        </p>
      </div>

      <div className="md:hidden flex items-center justify-center px-4 mb-4 relative h-12 w-full shrink-0">
        <button
          onClick={() => setActiveTab("assignments")}
          className="absolute left-4 p-2 -ml-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          <Image src="/arrowleft.svg" alt="Back" width={20} height={20} />
        </button>
        <h1 className="text-[16px] font-bold text-black text-center">
          Create Assignment
        </h1>
      </div>

      <div className="px-8 max-md:px-4 mb-8 shrink-0">
        <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-black w-1/3 rounded-full"></div>
        </div>
      </div>

      <div className="px-8 max-md:px-4 pb-24 flex justify-center">
        <div className="w-full max-w-202.5 flex flex-col space-y-8">
          <div className="bg-white max-md:bg-white backdrop-blur-sm rounded-[24px] max-md:rounded-[32px] p-8 max-md:p-5 flex flex-col space-y-8 max-md:space-y-6 shadow-sm border border-white">
            <div>
              <h2 className="text-[18px] max-md:text-[16px] font-bold text-black">
                Assignment Details
              </h2>
              <p className="text-[13px] text-gray-500">
                Basic information about your assignment
              </p>
            </div>

            <div className="flex flex-col space-y-2 text-center">
              <div className="border-2 border-dashed border-gray-200 rounded-[16px] py-10 flex flex-col items-center justify-center space-y-3 bg-white">
                <Image src="/uploadicon.svg" alt="Upload" width={24} height={24} />
                <div className="text-[15px] max-md:text-[14px] font-bold text-black px-4">
                  {uploadedFile ? (
                    <span>{uploadedFile.name}</span>
                  ) : (
                    "Choose a file or drag & drop it here"
                  )}
                </div>
                <div className="text-[12px] text-gray-400">JPEG, PNG, upto 10MB</div>
                <CldUploadButton
                  options={{ multiple: false }}
                  uploadPreset="ml_default"
                  signatureEndpoint="/api/upload/signature"
                  onSuccess={handleUploadSuccess}
                >
                  <span className="mt-2 px-6 py-2 bg-gray-50 hover:bg-gray-100 text-black text-[13px] font-medium rounded-full border border-gray-200 transition-colors">
                    Browse Files
                  </span>
                </CldUploadButton>
              </div>
              <p className="text-[13px] text-gray-400">
                Upload images of your preferred document/image
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-[14px] max-md:text-[13px] font-bold text-black">
                Due Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-between text-left font-normal border border-gray-200 rounded-full px-4 py-3.5 text-[14px] bg-white hover:bg-white",
                      !date && "text-muted-foreground"
                    )}
                  >
                    {date ? format(date, "PPP") : <span className="text-gray-300">DD-MM-YYYY</span>}
                    <CalendarIcon className="h-4 w-4 text-black" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <QuestionTypes />

            <div className="flex flex-col space-y-2">
              <label className="text-[14px] max-md:text-[13px] font-bold text-black">
                Additional Information{" "}
                <span className="font-normal text-gray-500">(For better output)</span>
              </label>
              <div className="relative">
                <textarea
                  placeholder="e.g Generate a question paper for 3 hour exam duration..."
                  className="w-full h-33 border border-gray-200 rounded-[16px] p-4 text-[13px] bg-gray-50 focus:bg-white focus:outline-none focus:border-gray-400 resize-none"
                ></textarea>
                <button className="absolute bottom-4 right-4 text-gray-500 hover:text-black">
                  <Image src="/mic.svg" alt="Mic" width={16} height={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8 max-md:mt-4 max-md:mb-8">
            <button
              onClick={() => setActiveTab("assignments")}
              className="px-6 py-3 bg-white text-black text-[14px] font-medium rounded-full flex items-center space-x-2 border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
            >
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
