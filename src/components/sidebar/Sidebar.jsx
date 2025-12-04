import { Button } from "@/components/ui/button";
import { TimerReset } from "lucide-react";
import PanelContainer from "../layouts/PanelContainer";

export default function Sidebar() {
  return (
    <div className="h-screen w-[339px] shrink-0">
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
    </div>
  );
}
