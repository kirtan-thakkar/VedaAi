import Image from "next/image";

const Dashboard = () => {
  return (
    <>
      <main className="flex-1 flex flex-col min-w-0 rounded-[16px] overflow-hidden -mt-3">
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

        {/* Dashboard Body */}
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

            <button className="flex items-center justify-center space-x-2 bg-black text-white rounded-full py-3.5 px-6 hover:bg-gray-800 transition-colors shadow-md">
              <Image src="/plus.svg" alt="Create Assignment" width={16} height={16} />
              <span className="font-medium text-[15px]">
                Create Your First Assignment
              </span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;