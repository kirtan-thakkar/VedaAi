import Image from "next/image";

interface SideBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const SideBar = ({ activeTab, setActiveTab }: SideBarProps) => {
  return (
    <aside className="flex flex-col h-full w-[304px] bg-white rounded-[16px] px-6 py-6 shadow-sm border border-gray-100">
      {/* Top Section */}
      <div className="flex flex-col space-y-8 gap-2">
        <div className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="VedaAI Logo" width={80} height={80} className=" rounded-[15px]" />
          <span className="font-bold text-[28px] tracking-[-0.06em] text-black">
            VedaAI
          </span>
        </div>

        <button className="flex items-center justify-center space-x-2 bg-black text-white rounded-full py-3 px-4 hover:bg-gray-800 transition-colors shadow-[0_0_15px_rgba(249,115,22,0.2)] border border-orange-500/20">
          <span className="text-xl leading-none">✨</span>
          <span className="font-medium text-base">Create Assignment</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-8 space-y-1">
        <button
          onClick={() => setActiveTab("home")}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
            activeTab === "home" ? "bg-[#F4F4F5] text-black" : "text-gray-600 hover:bg-gray-50 hover:text-black"
          }`}
        >
          <Image src="/home.svg" alt="Home" width={20} height={20} />
          <span className="font-normal text-base tracking-[-0.04em]">Home</span>
        </button>
        <button
          onClick={() => setActiveTab("groups")}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
            activeTab === "groups" ? "bg-[#F4F4F5] text-black" : "text-gray-600 hover:bg-gray-50 hover:text-black"
          }`}
        >
          <Image src="/mygroup.svg" alt="My Groups" width={20} height={20} />
          <span className="font-normal text-base tracking-[-0.04em]">My Groups</span>
        </button>
        <button
          onClick={() => setActiveTab("assignments")}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
            activeTab === "assignments" ? "bg-[#F4F4F5] text-black" : "text-gray-600 hover:bg-gray-50 hover:text-black"
          }`}
        >
          <div className="flex items-center space-x-3">
            <Image src="/assignment.svg" alt="Assignments" width={20} height={20} />
            <span className="font-normal text-base tracking-[-0.04em]">Assignments</span>
          </div>
          {activeTab === "assignments" && (
            <span className="bg-[#F97316] text-white text-[10px] font-bold px-2 py-0.5 rounded-full leading-none">10</span>
          )}
        </button>
        <button
          onClick={() => setActiveTab("toolkit")}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
            activeTab === "toolkit" ? "bg-[#F4F4F5] text-black" : "text-gray-600 hover:bg-gray-50 hover:text-black"
          }`}
        >
          <Image src="/book.svg" alt="AI Teacher's Toolkit" width={20} height={20} />
          <span className="font-normal text-base tracking-[-0.04em]">AI Teacher&apos;s Toolkit</span>
        </button>
        
        <div className="py-2">
          <div className="mx-4 border-t border-dashed border-gray-300"></div>
        </div>

        <button
          onClick={() => setActiveTab("library")}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
            activeTab === "library" ? "bg-[#F4F4F5] text-black" : "text-gray-600 hover:bg-gray-50 hover:text-black"
          }`}
        >
          <Image src="/mylibrary.svg" alt="My Library" width={20} height={20} />
          <span className="font-normal text-base tracking-[-0.04em]">My Library</span>
        </button>
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto flex flex-col space-y-4">
        <button
          onClick={() => setActiveTab("settings")}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
            activeTab === "settings" ? "bg-[#F4F4F5] text-black" : "text-gray-600 hover:bg-gray-50 hover:text-black"
          }`}
        >
          <Image src="/settings.svg" alt="Settings" width={20} height={20} />
          <span className="font-normal text-base tracking-[-0.04em]">Settings</span>
        </button>

        {/* Profile Card */}
        <div className="flex items-center p-3 space-x-3 bg-[#F4F4F5] rounded-2xl cursor-pointer hover:bg-gray-200 transition-colors">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden shrink-0">
            <Image src="/profile.svg" alt="Profile" width={40} height={40} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col overflow-hidden text-left">
            <span className="font-medium text-sm text-black truncate">Delhi Public School</span>
            <span className="text-xs text-gray-500 truncate">Bokaro Steel City</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
