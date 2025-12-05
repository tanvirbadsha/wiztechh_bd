import { Badge } from "@/components/ui/badge";
import CourseTab from "./CourseTab";

export default function CourseShowcase() {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-4 pt-4 max-w-full">
      <Badge className={"bg-linear-to-r from-[#FCC3FF] to-[#F75EFF] "}>
        <span className="text-black font-silika text-[16px] font-semibold uppercase">
          Diversify revenue stream
        </span>
      </Badge>
      <h1 className="font-clash font-bold text-[20px] md:text-[52px] max-w-[742px] leading-[110%]">
        Maximise earnings with limitless revenue streams.
      </h1>
      <p className="font-silika font-medium text-[20px] max-w-[742px] leading-[150%]">
        Create and sell courses, consulting services, and communities - with
        Zero marketing cost and a built-in sales network.
      </p>
      <CourseTab />
    </div>
  );
}
