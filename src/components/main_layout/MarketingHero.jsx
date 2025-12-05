import { Badge } from "@/components/ui/badge";
import EmailInput from "./EmailInput";
import SellStats from "./SellStats";
export default function MarketingHero() {
  return (
    <div className="bg-[#2A0019] flex flex-col justify-center items-center text-white gap-8 py-[33px] md:py-[66px] px-2 md:px-0">
      <Badge className={"bg-[#1B162699] text-white"}>
        <p className="font-semibold text-[16px]">Build For you</p>
      </Badge>
      <div>
        <h1 className="font-clash font-bold text-[36px] md:text-[72px]">
          Built for Creators.
        </h1>
        <h1 className="font-clash font-bold text-[36px] md:text-[72px]">
          Powered for Profit
        </h1>
      </div>
      <p className=" text-[16px] md:text-[20px] font-medium max-w-[760px] text-center">
        Create and sell courses, consulting services, and communities - with
        Zero marketing cost and a built-in sales network.
      </p>
      <EmailInput />
      <SellStats />
    </div>
  );
}
