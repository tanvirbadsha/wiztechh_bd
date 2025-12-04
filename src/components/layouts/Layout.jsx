import MainContentLayout from "../main_layout/MainContentLayout";
import Sidebar from "../sidebar/Sidebar";

export default function Layout() {
  return (
    <div className="flex w-full gap-4">
      {/* container for main layout */}
      <Sidebar />
      <MainContentLayout />
    </div>
  );
}
