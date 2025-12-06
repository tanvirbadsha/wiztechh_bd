import { motion } from "framer-motion";
import EssentialCard from "./EssentialCard";

export default function EssentialCardsContainer() {
  //   const cards = ["Card 1", "Card 2", "Card 3"];
  const cards = [
    {
      id: 1,
      title: "Payments",
      imgSrc: "/assets/essential_icons/payments.png",
      alt: "payment logo",
      desc: "Responsibly sourced woods and eco-friendly fabrics for a better tomorrow.",
    },
    {
      id: 2,
      title: "Analytics",
      imgSrc: "/assets/essential_icons/analytics.png",
      alt: "analytics logo",
      desc: "Understand your growth with smart, built-in analytics.",
    },
    {
      id: 3,
      title: "Pages",
      imgSrc: "/assets/essential_icons/pages.png",
      alt: "pages logo",
      desc: "Showcase your expertise with a personal profile that sells for you.",
    },
    {
      id: 4,
      title: "Newsletters",
      imgSrc: "/assets/essential_icons/newsletters.png",
      alt: "newsletters logo",
      desc: "build your audience with engaging, branded newsletter.",
    },
    {
      id: 5,
      title: "Contact",
      imgSrc: "/assets/essential_icons/contact.png",
      alt: "contact logo",
      desc: "Organize your contacts and turn them into your most valuable asset., ",
    },
    {
      id: 6,
      title: "Emails",
      imgSrc: "/assets/essential_icons/emails.png",
      alt: "emails logo",
      desc: "Showcase your expertise with a personal profile that sells for you.",
    },
    {
      id: 7,
      title: "Co-sell network",
      imgSrc: "/assets/essential_icons/coSell.png",
      alt: "co sell logo",
      desc: "Collaborate with others to sell more without ad spend or extra effort.",
    },
    {
      id: 8,
      title: "Enterprise Plan",
      imgSrc: "/assets/essential_icons/enterprise.png",
      alt: "enterprise logo",
      desc: "Full white-label platform hosted on a dedicated, auto-scaling server. Includes branding freedom, private content protection, and 24/7 service availability.",
    },
  ];

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 pb-[38px]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }} // animate when 20% in view
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15, // fade items one by one
          },
        },
      }}
    >
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className={` ${card.id === 8 ? "lg:col-span-2" : ""}`}
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
        >
          <EssentialCard
            key={card.id}
            title={card.title}
            imgSrc={card.imgSrc}
            desc={card.desc}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
