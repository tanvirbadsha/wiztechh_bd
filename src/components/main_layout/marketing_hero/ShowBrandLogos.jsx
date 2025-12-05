import Marquee from "react-fast-marquee";
export default function ShowBrandLogos() {
  return (
    <div className="mt-[90px] space-y-7">
      <h1 className="font-silika text-[16px] md:text-[24px] text-center text-[#5D5D5D] tracking-tighter">
        TRUSTED BY +10,000 CONSULTANTS & ORGANISATIONS
      </h1>
      <Marquee>
        <div className="flex gap-13 ">
          <img src="/assets/company_logos/kdnet.jpg" alt="kdnet logo" />
          <img src="/assets/company_logos/uia.jpg" alt="uia logo" />
          <img src="/assets/company_logos/plannIt.jpg" alt="plannIt logo" />
          <img src="/assets/company_logos/kfl.jpg" alt="kfl logo" />
          <img src="/assets/company_logos/innova.png" alt="innova logo" />
          <img src="/assets/company_logos/image_7.png" alt="image_7 logo" />
        </div>
      </Marquee>
    </div>
  );
}
