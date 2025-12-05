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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {stats.map((stat, index) => (
        <SingleStatSell key={index} title={stat.title} value={stat.value} des={stat.des} />
      ))}
    </div>
  );
}
