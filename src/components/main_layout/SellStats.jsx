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
    <div className="border border-[#505152] rounded-[40px] bg-linear-to-br from-[#2b0f26] to-[rgb(19,5,15)] p-8">
      <div className="flex justify-between items-center">
        <h1 className="font-blauerNue text-[32px] font-semibold">
          Sell from day one - even with zero audience
        </h1>
        <button className="border rounded-theme px-5 py-3">
          Open Calculator
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {stats.map((stat, index) => (
          <SingleStatSell
            key={index}
            title={stat.title}
            value={stat.value}
            des={stat.des}
          />
        ))}
      </div>
      <p className="font-silika text-[20px] font-medium  bg-[#FFF3D8] text-[#695F4C]">
        Unlike Kajabi, Teachable, or Skool, Growhubs helps you find and convert
        clients inside the platform so you can sell from day one without paying
        for ads.
      </p>
    </div>
  );
}
