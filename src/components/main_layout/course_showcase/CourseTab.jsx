import { useState } from "react";

export default function CourseTab() {
  const [activeTab, setActiveTab] = useState("Courses");

  const tabs = [
    {
      name: "Courses",
      shortName: "Courses",
      icon: "/assets/tab_icons/courses.png",
    },
    {
      name: "Communities",
      shortName: "Communities",
      icon: "/assets/tab_icons/communities.png",
    },
    {
      name: "Coaching & Consulting",
      shortName: "Coaching",
      icon: "/assets/tab_icons/coaching.png",
    },
    {
      name: "Merchandise",
      shortName: "Merch",
      icon: "/assets/tab_icons/Merchandise.png",
    },
    {
      name: "Podcasts",
      shortName: "Podcasts",
      icon: "/assets/tab_icons/podcasts.png",
    },
    {
      name: "Events",
      shortName: "Events",
      icon: "/assets/tab_icons/events.png",
    },
    {
      name: "Brokerage",
      shortName: "Brokerage",
      icon: "/assets/tab_icons/brokerage.png",
    },
  ];

  return (
    <div className="space-y-6 max-w-full">
      <div className="bg-white rounded-theme border px-2 py-2 flex gap-2 overflow-scroll md:overflow-hidden">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            type="button"
            onClick={() => setActiveTab(tab.name)}
            className={`${
              activeTab === tab.name
                ? "custom-theme-color text-white"
                : "text-[#6F6F6F]"
            } rounded-theme border border-transparent hover:border-theme flex items-center justify-center py-2 px-4 md:px-6 gap-1 md:gap-2 cursor-pointer font-helvetica font-bold`}
          >
            <img
              src={tab.icon}
              alt={tab.name}
              className="w-4 h-4 md:w-auto md:h-auto"
            />{" "}
            <span className="hidden md:inline">{tab.name}</span>
            <span className="md:hidden text-xs">{tab.shortName}</span>
          </button>
        ))}
      </div>
      <div className="bg-linear-to-r from-[#2A0019] to-[#9c8195] text-white rounded-tl-[50px] md:rounded-tl-[250px] rounded-tr-[16px] md:rounded-tr-[32px] rounded-br-[16px] md:rounded-br-[32px] rounded-bl-[50px] md:rounded-bl-[250px] p-6 md:pl-[96px] flex flex-col md:flex-row justify-between items-center overflow-x-hidden">
        <div className="space-y-4 max-w-[381px] py-8 md:py-[103px] text-start">
          <h1 className="font-blauerNue text-[20px] md:text-[32px]">Courses</h1>
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
          <button className="bg-[#2A0019] px-6 py-3 rounded-theme cursor-pointer hover:bg-[#2a001991]">
            Learn More
          </button>
        </div>
        <div className="relative">
          <img src="/assets/course.png" alt="logo" />
          {/* overflowing */}
          <img
            src="/assets/show_courses/message.svg"
            class="absolute bottom-14 right-[-10px]"
          />
        </div>
      </div>
    </div>
  );
}
