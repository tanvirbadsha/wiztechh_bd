import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import PanelContainer from "../layouts/PanelContainer";

export default function RenderPanelMain({ toggleSidebar, sortBy, setSortBy }) {
  return (
    <PanelContainer>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0">
        <p className="text-[20px] md:text-[20px] px-4 font-semibold">
          Property{" "}
          <span className="text-[#697483] text-[16px]">
            --- showing result-(12)
          </span>
        </p>
        <Button
          variant="outline"
          size="sm"
          className="md:hidden flex items-center gap-2"
          onClick={toggleSidebar}
        >
          <Filter size={16} />
          Filters
        </Button>
      </div>
      <div className="flex flex-col items-start md:items-center gap-1 bg-[#F4F6F8] p-2 rounded-[8px]">
        <label
          htmlFor="sort-select"
          className="text-[10px] self-start text-[#697483]"
        >
          Sort by:
        </label>
        <select
          id="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className=" rounded-md text-sm focus:outline-none  w-full md:w-auto"
        >
          <option value="Low to High">Low to High</option>
          <option value="High to Low">High to Low</option>
        </select>
      </div>
    </PanelContainer>
  );
}
