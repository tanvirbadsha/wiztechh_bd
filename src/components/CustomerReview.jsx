import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Stars from "./Stars";
export default function CustomerReview() {
  return (
    <div className="bg-white px-[24.5px] py-[20.5px] rounded-[32px] flex gap-[42px]">
      {/* left side */}
      <div className="max-w-[454px]">
        <img
          src="/assets/customer_review/video.png"
          alt="video thumbnail"
          className="w-full h-auto"
        />
      </div>
      {/* right side */}
      <div>
        {/* first element starts */}
        <div className="flex gap-2 justify-between">
          {/* left side */}
          <div className="flex flex-col gap-[42px]">
            <div className="flex flex-col gap-[18px]">
              {/* avatar potion */}
              <div className="flex items-center gap-[13px]">
                <Avatar>
                  <AvatarImage
                    src="/assets/customer_review/avatar.png"
                    alt="avatar"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start">
                  <h1 className="font-clash font-semibold text-[24px]">
                    Iva Ryan
                  </h1>
                  <p className="text-[#4B5563]">
                    Marketing manager at{" "}
                    <span className="bold text-black text-[16px]">Adobe</span>
                  </p>
                </div>
              </div>
              {/* button portion */}
              <div className="flex gap-[19px]">
                <button className="border border-[#695F4C] px-[16px] py-[10px] font-silika font-medium text-[16px] rounded-theme">
                  Content Creator
                </button>
                <button className="border border-[#695F4C] px-[16px] py-[10px] font-silika font-medium text-[16px] rounded-theme">
                  Youtuber
                </button>
                <button className="border border-[#695F4C] px-[16px] py-[10px] font-silika font-medium text-[16px] rounded-theme">
                  Growth Expert
                </button>
              </div>
            </div>
            <p className="font-silika text-[28px] font-normal max-w-[495px] text-start">
              I recently had the opportunity to use the platform, and I must
              say, the feature that allows you to set your own commission is a
              game changer!
            </p>
            <div className="flex flex-col items-start">
              <h1 className="font-clash text-[21px] md:text-[52px] font-bold">
                $2M
              </h1>
              <p className="uppercase font-silika text-[14px] md:text-[20px] leading-1.5 font-medium text-[#4B5563]">
                Earned In Helenuil
              </p>
            </div>
          </div>
          {/* right side for stars */}
          <div>
            {" "}
            <Stars count={3} />{" "}
          </div>
        </div>
        {/* first element ends */}
      </div>
    </div>
  );
}
