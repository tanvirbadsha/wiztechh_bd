import { Button } from "@/components/ui/button";
import { TimerReset } from "lucide-react";
import { propertyCategoryData } from "../../data/propertyReference";
import PanelContainer from "../layouts/PanelContainer";
import CustomAccordion from "./CustomAccordion";
import PriceAccordion from "./PriceAccordion";

export default function Sidebar() {
  return (
    <div className="h-screen w-[339px] shrink-0 flex flex-col gap-4">
      <PanelContainer>
        <p className="text-[16px] px-4">Property Preference</p>
        <Button
          variant="outline"
          size="sm"
          className="px-4 py-[17.5px] cursor-pointer bg-[#F4F6F8]"
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
