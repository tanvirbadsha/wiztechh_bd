import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Stars from "./Stars";
export default function CustomerReview({
  videoSrc = "/assets/customer_review/video.png",
  avatarSrc = "/assets/customer_review/avatar.png",
  avatarFallback = "CN",
  name = "not found",
  title = "n/a",
  company = "n/a",
  buttons = ["default", "default", "default"],
  reviewText = "default review",
  earnedAmount = "$n/a",
  earnedLabel = "n/a",
  starsCount = 5,
}) {
  return (
    <div className="bg-white px-[24.5px] py-[20.5px] rounded-[32px] flex flex-col md:flex-row gap-[20px] md:gap-[42px] h-full md:ml-10">
      {/* left side */}
      <div className="w-full md:max-w-[454px] md:flex-1">
        <img src={videoSrc} alt="video thumbnail" className="w-full h-auto" />
      </div>
      {/* right side */}
      <div className="flex flex-col md:flex-row md:justify-between md:gap-2 w-full md:flex-1">
        {/* first element starts */}
        <div className="flex flex-col md:flex-row justify-between md:flex-1">
          {/* left side */}
          <div className="flex flex-col gap-[20px] md:gap-[42px]">
            <div className="flex flex-col gap-[18px]">
              {/* avatar potion */}
              <div className="flex items-center gap-[13px]">
                <Avatar>
                  <AvatarImage src={avatarSrc} alt="avatar" />
                  <AvatarFallback>{avatarFallback}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start">
                  <h1 className="font-clash font-semibold text-[24px]">
                    {name}
                  </h1>
                  <p className="text-[#4B5563]">
                    {title}{" "}
                    <span className="bold text-black text-[16px]">
                      {company}
                    </span>
                  </p>
                </div>
              </div>
              {/* button portion */}
              <div className="flex flex-col gap-2 md:flex-row md:gap-[19px]">
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    className="border border-[#695F4C] px-[16px] py-[10px] font-silika font-medium text-[16px] rounded-theme"
                  >
                    {button}
                  </button>
                ))}
              </div>
            </div>
            <p className="font-silika text-[20px] md:text-[28px] font-normal max-w-[495px] text-start">
              {reviewText}
            </p>
            <div className="flex flex-col items-start">
              <h1 className="font-clash text-[21px] md:text-[52px] font-bold">
                {earnedAmount}
              </h1>
              <p className="uppercase font-silika text-[14px] md:text-[20px] leading-1.5 font-medium text-[#4B5563]">
                {earnedLabel}
              </p>
            </div>
          </div>
          {/* right side for stars */}
          <div className="md:pr-10 2xl:pr-0 mt-5 md:mt-0">
            {" "}
            <Stars count={starsCount} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
