import { Badge } from "@/components/ui/badge";
import CustomerReview from "../CustomerReview";
export default function ShowCustomerReview() {
  return (
    <div className="bg-linear-to-b from-[#2A0019] to-[#3C4C5AD4] flex flex-col justify-center text-center items-center pt-[60px] gap-4">
      <Badge className={"bg-linear-to-r from-[#FAC1FD] to-[#F75EFF] "}>
        <span className="text-black font-silika text-[16px] font-semibold uppercase">
          Diversify revenue stream
        </span>
      </Badge>
      <h1 className="font-clash font-bold text-[20px] md:text-[52px] max-w-[742px] leading-[110%] text-white">
        Trusted by Creators & Proven by Results.
      </h1>
      <p className="font-silika font-medium text-[20px] max-w-[742px] leading-[150%] text-white">
        See how others grow with Growhubs — real stories, real success.
      </p>
      <CustomerReview />
    </div>
  );
}
