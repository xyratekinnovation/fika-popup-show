import photo1 from "@/assets/events/edition-photo-1.jpg";
import photo2 from "@/assets/events/edition-photo-2.jpg";
import photo3 from "@/assets/events/edition-photo-3.jpg";
import photo4 from "@/assets/events/edition-photo-4.jpg";
import photo5 from "@/assets/events/edition-photo-5.jpg";
import photo6 from "@/assets/events/edition-photo-6.jpg";
import photo7 from "@/assets/events/edition-photo-7.jpg";
import photo8 from "@/assets/events/edition-photo-8.jpg";

export type Edition = {
  number: string;
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
};

/**
 * Eight past editions from the official PDF.
 * Images are general Fika event photographs — not claimed as edition-specific.
 */
export const EDITIONS: Edition[] = [
  {
    number: "01",
    title: "Our Beginning",
    date: "December 18 & 19, 2021",
    description:
      "Our very first Fika Pop-Up Show was held on December 18 and 19, 2021. The event showcased 54 stalls, included a bloggers' meet, featured two live band performances and offered 3 engaging workshops along with a hugely popular Sing Along session with 10,000+ walk-ins.",
    image: photo1,
    imageAlt: "Guests and stalls at a Fika Pop-Up Show edition",
  },
  {
    number: "02",
    title: "La La Land",
    date: "June 4 & 5, 2022",
    description:
      "Our second edition occurred on June 4 and 5, 2022, titled 'La La Land' to provide a captivating experience for all attendees. The event showcased 85 stalls, featured two band performances, offered seven workshops, and included a concert by the renowned band Masala Coffee.",
    image: photo2,
    imageAlt: "Atmosphere from a Fika Pop-Up Show gathering",
  },
  {
    number: "03",
    title: "Third Edition",
    date: "February 4 & 5, 2023",
    description:
      "Our third Fika Pop-Up Show was held on February 4th and 5th, 2023. The event showcased around 60 stalls, featured performances by three musical bands, offered ten engaging workshops, and included a lively sing-along session.",
    image: photo3,
    imageAlt: "Curated stalls and visitors at Fika",
  },
  {
    number: "04",
    title: "Coimbatore Vizha",
    date: "January 4 & 5, 2024",
    description:
      "The 4th Edition, in collaboration with Coimbatore Vizha, took place on January 4th and 5th, 2024 with over 20,000 walk-ins. The event showcased 60 stalls, 3 music bands, 5 workshops and an engaging DJ session. Then Coimbatore City Commissioner Mr. Balakrishnan honoured the occasion as a Special Guest.",
    image: photo4,
    imageAlt: "Community moments at Fika Pop-Up Show",
  },
  {
    number: "05",
    title: "Sustainability Edition",
    date: "October 5 & 6, 2024",
    description:
      "The 5th Edition of the Fika Pop-Up Show represented a deliberate move towards sustainability, attracting over 25,000 visitors on October 5 & 6, 2024. Our event showcased prints, name boards, and various decorations crafted from eco-friendly materials such as jute, felt, and wood.",
    image: photo5,
    imageAlt: "Fika event décor and marketplace details",
  },
  {
    number: "06",
    title: "Diwali Edition",
    date: "October 4 & 5, 2025",
    description:
      "The 6th Edition of the Fika Pop-Up Show, centered around Diwali, showcased over 75 stalls that offered a delightful mix of fashion, lifestyle, and food, attracting 25,000 visitors on October 4 and 5, 2025.",
    image: photo6,
    imageAlt: "Festive shopping and food stalls at Fika",
  },
  {
    number: "07",
    title: "Pongal Edition",
    date: "Date not specified in the official brochure",
    description:
      "The 7th Edition of the Fika Pop-Up Show, inspired by the spirit of Pongal and Tamil tradition, featured 60+ curated stalls showcasing fashion, lifestyle, home décor, and festive delights. The two-day event welcomed 35,000+ visitors, celebrating culture, community, and local entrepreneurship.",
    image: photo7,
    imageAlt: "Cultural celebration atmosphere at Fika",
  },
  {
    number: "08",
    title: "Indoor Shopping Experience",
    date: "Date not specified in the official brochure",
    description:
      "The 8th edition of Fika Pop-Up Show brings you an elevated indoor shopping experience, featuring a curated mix of fashion, lifestyle, food and independent brands, all under one roof. A thoughtfully designed space for shopping, discovery and experiences.",
    image: photo8,
    imageAlt: "Indoor shopping experience at Fika Pop-Up Show",
  },
];
