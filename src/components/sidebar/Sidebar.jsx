import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TimerReset, X } from "lucide-react";
import { propertyCategoryData } from "../../data/propertyReference";
import PanelContainer from "../layouts/PanelContainer";
import CustomAccordion from "./CustomAccordion";
import PriceAccordion from "./PriceAccordion";

export default function Sidebar({ className, onClose }) {
  return (
    <div
      className={cn(
        "h-screen w-[339px] shrink-0 flex flex-col gap-4 overflow-y-auto mb-[43px]",
        className
      )}
    >
      <div className="md:hidden flex justify-end p-2">
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X size={20} />
        </Button>
      </div>
      <PanelContainer>
        <p className="text-[16px] px-4">Property Preference</p>
        <Button
          variant="outline"
          size="sm"
          className="px-4 py-6 cursor-pointer bg-[#F4F6F8]"
        >
          Reset Filter <TimerReset />
        </Button>
      </PanelContainer>
      <div className="">
        <PriceAccordion />
      </div>
      <CustomAccordion data={propertyCategoryData} />
    </div>
  );
}
