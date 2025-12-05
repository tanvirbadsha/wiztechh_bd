import { useState } from "react";
import HouseCardContainer from "../HouseCardContainer";
import PanelContainer from "../layouts/PanelContainer";
import { CustomPagination } from "./CustomPagination";

export default function MainContentLayout() {
  const [sortBy, setSortBy] = useState("Low to High");

  return (
    <div className="h-screen flex-1 flex flex-col gap-6">
      <PanelContainer>
        <p className="text-[20px] px-4 font-semibold">
          Property{" "}
          <span className="text-[#697483]">--- showing result-(12)</span>
        </p>
        <div className="flex items-center gap-2">
          <label htmlFor="sort-select" className="text-sm font-medium">
            Sort by:
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </select>
        </div>
      </PanelContainer>
      <HouseCardContainer />
      <CustomPagination />
    </div>
  );
}
