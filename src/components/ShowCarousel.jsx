import useEmblaCarousel from "embla-carousel-react";
import CustomerReview from "./CustomerReview";

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

export default function ShowCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" });

  return (
    <div className="overflow-hidden w-full mt-10" ref={emblaRef}>
      <div className="flex">
        {reviews.map((review, i) => (
          <div key={i} className="min-w-[100%] md:min-w-[80%] md:h-[530px]">
            <CustomerReview {...review} />
          </div>
        ))}
      </div>
    </div>
  );
}
