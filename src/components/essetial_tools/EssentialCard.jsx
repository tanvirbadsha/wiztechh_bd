import { ArrowRight } from "lucide-react";
export default function EssentialCard({ title, imgSrc, desc }) {
  const islc = title === "Enterprise Plan";
  return (
    <div
      className={`bg-white p-8 rounded-[12px] flex flex-col gap-[23px] h-full ${
        islc ? "bg-gradient-to-r from-[#4D5D69] to-[#A16A6B]" : ""
      }`}
    >
      <div className="flex justify-between">
        <h1
          className={`font-clash text-[32px] font-bold leading-[110%] text-[#4E4E4E] ${
            islc
              ? "text-transparent bg-clip-text bg-gradient-to-r from-[#FBFD89] to-[#FFD900]"
              : ""
          }`}
        >
          {title}
        </h1>
        <img src={imgSrc} className="w-12 h-12 object-contain" />
      </div>
      <p
        className={`text-[#757575] font-silika text-[16px] ${
          islc ? "text-white" : ""
        }`}
      >
        {desc}
      </p>
      <button
        className={`flex items-center text-[#CD9D41] font-silika text-[16px] cursor-pointer ${
          islc
            ? "text-transparent bg-clip-text bg-gradient-to-r from-[#FBFD89] to-[#FFD900]"
            : ""
        }`}
      >
        Learn more <ArrowRight className="w-[20px] h-[20px]" />
      </button>
    </div>
  );
}
