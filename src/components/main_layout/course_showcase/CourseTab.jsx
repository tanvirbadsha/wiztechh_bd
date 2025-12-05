import { useState } from "react";

export default function CourseTab() {
  const [activeTab, setActiveTab] = useState("Courses");

  const tabs = [
    { name: "Courses", icon: "/assets/tab_icons/courses.png" },
    { name: "Communities", icon: "/assets/tab_icons/communities.png" },
    { name: "Coaching & Consulting", icon: "/assets/tab_icons/coaching.png" },
    { name: "Merchandise", icon: "/assets/tab_icons/Merchandise.png" },
    { name: "Podcasts", icon: "/assets/tab_icons/podcasts.png" },
    { name: "Events", icon: "/assets/tab_icons/events.png" },
    { name: "Brokerage", icon: "/assets/tab_icons/brokerage.png" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-[#FFFFFF] rounded-theme border px-2 py-2 flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            type="button"
            onClick={() => setActiveTab(tab.name)}
            className={`${
              activeTab === tab.name
                ? "custom-theme-color text-white"
                : "text-[#6F6F6F]"
            } rounded-theme border border-transparent hover:border-theme flex items-center justify-center py-2 px-6 gap-2 cursor-pointer font-helvetica font-bold text-nowrap`}
          >
            <img src={tab.icon} alt={tab.name} className="" /> {tab.name}
          </button>
        ))}
      </div>
      <div className="bg-linear-to-r from-[#2A0019] to-[#5C0639] text-white rounded-tl-[250px] rounded-tr-[32px] rounded-br-[32px] rounded-bl-[250px] pl-[96px] flex justify-between">
        <div className="space-y-4 max-w-[381px] py-[103px] text-start ">
          <h1 className="font-blauerNue text-[16px] md:text-[32px]">Courses</h1>
          <p className="font-silika text-[14px] md:text-[16px] font-medium">
            Turn your knowledge into structured, sellable products.
          </p>
          <p className="font-silika text-[14px] md:text-[16px] font-medium">
            Build online, drip, academic, or challenge-based courses with
            built-in tools for gamification, accountability, and engagement.
          </p>
          <p className="font-silika text-[14px] md:text-[16px] font-medium">
            Every course is optimized to deliver value and generate recurring
            income.
          </p>
        </div>
        <img src="/assets/course.png" alt="logo" className="py-4 pr-4" />
      </div>
    </div>
  );
}
