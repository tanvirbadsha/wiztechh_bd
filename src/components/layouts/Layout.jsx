import MainLayout from "../main_layout/MainLayout";
import Sidebar from "../sidebar/Sidebar";

export default function Layout() {
  return (
    <div className="flex w-full gap-4">
      {/* container for main layout */}
      <Sidebar />
      <MainLayout />
    </div>
  );
}
