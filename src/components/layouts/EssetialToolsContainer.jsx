import { Badge } from "@/components/ui/badge";
import EssentialCardsContainer from "../essetial_tools/EssentialCardsContainer";
export default function EssetialToolsContainer() {
  return (
    <div className="bg-[#FDF6E8] pt-[60px] flex flex-col gap-4 justify-center items-center">
      <Badge className={"bg-linear-to-r from-[#BCB3A0] to-[#E0D8C9] "}>
        <span className="text-black font-silika text-[16px] font-semibold uppercase">
          Essential Tools
        </span>
      </Badge>
      <h1 className="font-clash font-bold text-[20px] md:text-[52px] max-w-[634px] text-center leading-[110%]">
        Essential Tools Zero Distractions
      </h1>
      <p className="font-silika font-medium text-[20px] max-w-[742px] leading-[150%] text-center">
        Create diverse products on the platform and leverage our powerful tools
        to drive sales within and beyond GrowHubs.
      </p>
      <EssentialCardsContainer />
    </div>
  );
}
