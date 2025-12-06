import { useState } from "react";
import CourseShowcase from "../main_layout/course_showcase/CourseShowcase";
import MainContentLayout from "../main_layout/MainContentLayout";
import MarketingHero from "../main_layout/MarketingHero";
import Sidebar from "../sidebar/Sidebar";
import EssetialToolsContainer from "./EssetialToolsContainer";
import ShowCustomerReview from "./ShowCustomerReview";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <div className="flex w-full gap-6">
        {/* container for main layout */}
        <Sidebar
          className={`${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 fixed md:static top-0 left-0 h-full bg-white z-10 transition-transform duration-300`}
          onClose={toggleSidebar}
        />
        <MainContentLayout toggleSidebar={toggleSidebar} />
      </div>

      <MarketingHero />

      <CourseShowcase />
      <ShowCustomerReview />
      <EssetialToolsContainer />
    </>
  );
}
