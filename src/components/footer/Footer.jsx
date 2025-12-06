export default function Footer() {
  const menuItems = [
    "About Us",
    "Resources",
    "Company",
    "Property",
    "Contact Us",
  ];
  const contactItems = ["Contact Us", "hello abc@gmail.com", "+012233455667"];
  const socialIcons = [
    { src: "/assets/footer_icons/facebook.png", alt: "facebook" },
    { src: "/assets/footer_icons/x.png", alt: "x logo" },
    { src: "/assets/footer_icons/insta.png", alt: "insta logo" },
    { src: "/assets/footer_icons/whatsapp.png", alt: "whatsapp logo" },
    { src: "/assets/footer_icons/thread.png", alt: "thread logo" },
    { src: "/assets/footer_icons/tiktok.png", alt: "tiktok logo" },
  ];

  return (
    <div className=" bg-[#251621] text-white w-full text-center rounded-tl-[40px] rounded-tr-[40px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 text-white pt-[70px]">
        <ul className="text-center md:text-left">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                className={
                  index === 0
                    ? "text-[20px] md:text-[28px] text-[#EEEBED]"
                    : "text-[16px] md:text-[20px] text-white/70"
                }
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <ul className="text-center md:text-left">
          {contactItems.map((item, index) => (
            <li key={index}>
              <a
                className={
                  index === 0
                    ? "text-[20px] md:text-[28px] text-[#EEEBED]"
                    : "text-[16px] md:text-[20px] text-white/70"
                }
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="space-y-3 ">
          <h1 className="text-[20px] md:text-[28px] text-[#EEEBED]">
            Follow Us
          </h1>
          <div className="flex gap-4 justify-center">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-center md:text-end px-4 md:px-[100px]">
        © 2025 Havenix. All rights reserved.
      </p>
      <h1
        className="font-medium text-[80px] md:text-[264px] bg-linear-to-r from-[#8A7384] to-[#CAC3C3] bg-clip-text text-transparent"
        style={{ fontFamily: "Alexandria, sans-serif" }}
      >
        WiztecBD
      </h1>
    </div>
  );
}
