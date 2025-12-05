import { useState } from "react";
import ProductShowcase from "./ProductShowcase";
import RenderPanelMain from "./RenderPanelMain";

export default function MainContentLayout({ toggleSidebar }) {
  const [sortBy, setSortBy] = useState("Low to High");

  return (
    <div className="h-screen flex-1 flex flex-col gap-6">
      <RenderPanelMain
        toggleSidebar={toggleSidebar}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <ProductShowcase />
    </div>
  );
}
