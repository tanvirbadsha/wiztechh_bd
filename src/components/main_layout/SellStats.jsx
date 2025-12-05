import Marquee from "react-fast-marquee";
import SingleStatSell from "./marketing_hero/SingleStatSell";

const stats = [
  {
    value: "21,500+",
    des: "People who can co-promote",
    title: "Co-Sellers in network",
  },
  {
    value: "86",
    title: "Expected Buyers / Month",
    des: "With zero personal audience",
  },
  {
    value: "US$774",
    title: "Est. MRR At us$9/MO",
    des: "From membership sales",
  },
  { value: "US$300", title: "Earn w/o a product", des: "just by co-selling" },
];
export default function SellStats() {
  return (
    <div className="border border-[#505152] rounded-[40px] bg-linear-to-br from-[#2b0f26] to-[rgb(19,5,15)] p-8 relative space-y-14">
      <div className="flex justify-between items-center">
        <h1 className="font-blauerNue text-[32px] font-semibold">
          Sell from day one - even with zero audience
        </h1>
        <button className="border rounded-theme px-5 py-3">
          Open Calculator
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <SingleStatSell
            key={index}
            title={stat.title}
            value={stat.value}
            des={stat.des}
          />
        ))}
      </div>
      <div className="bg-[#FFF3D8] absolute left-0">
        <Marquee>
          <p className="font-silika text-[20px] font-medium text-[#695F4C] px-6 py-4">
            Unlike Kajabi, Teachable, or Skool, Growhubs helps you find and
            convert clients inside the platform so you can sell from day one
            without paying for ads.
          </p>
        </Marquee>
      </div>
      <div className="h-[70px]"></div>
    </div>
  );
}
