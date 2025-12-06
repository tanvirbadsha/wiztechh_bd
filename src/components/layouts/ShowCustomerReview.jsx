import { Badge } from "@/components/ui/badge";
import CustomerReview from "../CustomerReview";

const reviews = [
  {
    videoSrc: "/assets/customer_review/video.png",
    avatarSrc: "/assets/customer_review/avatar.png",
    avatarFallback: "CN",
    name: "Iva Ryan",
    title: "Marketing manager at ",
    company: "Adobe",
    buttons: ["Content Creator", "Youtuber", "Growth Expert"],
    reviewText:
      "I recently had the opportunity to use the platform, and I must say, the feature that allows you to set your own commission is a game changer!",
    earnedAmount: "$2M",
    earnedLabel: "Earned In Helenuil",
    starsCount: 3,
  },
  {
    videoSrc: "/assets/customer_review/video.png",
    avatarSrc: "/assets/customer_review/avatar.png",
    avatarFallback: "JD",
    name: "John Doe",
    title: "Product Manager at ",
    company: "Google",
    buttons: ["Influencer", "Blogger", "Strategist"],
    reviewText:
      "This platform has revolutionized how I manage my online presence. The analytics are top-notch!",
    earnedAmount: "$1.5M",
    earnedLabel: "Earned In Helenuil",
    starsCount: 4,
  },
  {
    videoSrc: "/assets/customer_review/video.png",
    avatarSrc: "/assets/customer_review/avatar.png",
    avatarFallback: "AS",
    name: "Alice Smith",
    title: "CEO at ",
    company: "StartupXYZ",
    buttons: ["Entrepreneur", "Speaker", "Consultant"],
    reviewText:
      "Incredible tool for scaling businesses. Highly recommend to anyone in the creator economy.",
    earnedAmount: "$3M",
    earnedLabel: "Earned In Helenuil",
    starsCount: 5,
  },
];
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
      {reviews.map((review, index) => (
        <CustomerReview key={index} {...review} />
      ))}
    </div>
  );
}
