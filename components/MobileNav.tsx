import Image from "next/image";

interface MobileNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const MobileNav = ({ activeTab, setActiveTab }: MobileNavProps) => {
  return (
    <nav className="absolute bottom-6 left-4 right-4 bg-[#1e1e1e] rounded-[32px] h-[72px] flex items-center justify-between px-6 shadow-xl z-20">
      <button onClick={() => setActiveTab("home")} className={`flex flex-col items-center space-y-1.5 ${activeTab === "home" ? "" : "opacity-50"} relative transition-opacity`}>
        <Image src="/home.svg" alt="Home" width={22} height={22} className="brightness-0 invert" />
        <span className={`text-[10px] text-white ${activeTab === "home" ? "font-bold" : "font-medium"}`}>Home</span>
        {activeTab === "home" && <div className="absolute -bottom-2 w-4 h-0.5 bg-white rounded-full"></div>}
      </button>

      <button onClick={() => setActiveTab("assignments")} className={`flex flex-col items-center space-y-1.5 ${activeTab === "assignments" ? "" : "opacity-50"} relative transition-opacity`}>
        <Image src="/assignment.svg" alt="Assignments" width={22} height={22} className="brightness-0 invert" />
        <span className={`text-[10px] text-white ${activeTab === "assignments" ? "font-bold" : "font-medium"}`}>Assignments</span>
        {activeTab === "assignments" && <div className="absolute -bottom-2 w-4 h-0.5 bg-white rounded-full"></div>}
      </button>

      <button onClick={() => setActiveTab("library")} className={`flex flex-col items-center space-y-1.5 ${activeTab === "library" ? "" : "opacity-50"} relative transition-opacity`}>
        <Image src="/mylibrary.svg" alt="Library" width={22} height={22} className="brightness-0 invert" />
        <span className={`text-[10px] text-white ${activeTab === "library" ? "font-bold" : "font-medium"}`}>Library</span>
        {activeTab === "library" && <div className="absolute -bottom-2 w-4 h-0.5 bg-white rounded-full"></div>}
      </button>

      <button onClick={() => setActiveTab("toolkit")} className={`flex flex-col items-center space-y-1.5 ${activeTab === "toolkit" ? "" : "opacity-50"} relative transition-opacity`}>
        <Image src="/book.svg" alt="AI Toolkit" width={22} height={22} className="brightness-0 invert" />
        <span className={`text-[10px] text-white ${activeTab === "toolkit" ? "font-bold" : "font-medium"}`}>AI Toolkit</span>
        {activeTab === "toolkit" && <div className="absolute -bottom-2 w-4 h-0.5 bg-white rounded-full"></div>}
      </button>
    </nav>
  );
};

export default MobileNav;
