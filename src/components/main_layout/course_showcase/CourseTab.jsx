import { useState } from "react";

export default function CourseTab() {
  const [activeTab, setActiveTab] = useState("");
  return (
    <div>
      <div className="bg-[#FFFFFF] rounded-theme px-2 flex gap-2 py-2">
        <button
          type="button"
          className="custom-theme-color text-white rounded-theme flex items-center justify-center py-[11px] px-3 gap-2 cursor-pointer"
        >
          <img src="/assets/tab_icons/courses.png" className="" /> Courses
        </button>
        <button
          type="button"
          className="custom-theme-color text-white rounded-theme flex items-center justify-center py-[11px] px-3 gap-2 cursor-pointer"
        >
          <img src="/assets/tab_icons/communities.png" className="" />
          Communities
        </button>
        <button
          type="button"
          className="custom-theme-color text-white rounded-theme flex items-center justify-center py-[11px] px-3 gap-2 cursor-pointer"
        >
          <img src="/assets/tab_icons/coaching.png" className="" />
          Coaching & Consulting
        </button>
        <button
          type="button"
          className="custom-theme-color text-white rounded-theme flex items-center justify-center py-[11px] px-3 gap-2 cursor-pointer"
        >
          <img src="/assets/tab_icons/Merchandise.png" className="" />
          Merchandise
        </button>
        <button
          type="button"
          className="custom-theme-color text-white rounded-theme flex items-center justify-center py-[11px] px-3 gap-2 cursor-pointer"
        >
          <img src="/assets/tab_icons/podcasts.png" className="" />
          Podcasts
        </button>
        <button
          type="button"
          className="custom-theme-color text-white rounded-theme flex items-center justify-center py-[11px] px-3 gap-2 cursor-pointer"
        >
          <img src="/assets/tab_icons/events.png" className="" />
          Events
        </button>
        <button
          type="button"
          className="custom-theme-color text-white rounded-theme flex items-center justify-center py-[11px] px-3 gap-2 cursor-pointer"
        >
          <img src="/assets/tab_icons/brokerage.png" className="" />
          Brokerage
        </button>
      </div>
    </div>
  );
}
