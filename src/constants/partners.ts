import covaiMail from "@/assets/partners/the-covai-mail.png";
import skyRams from "@/assets/partners/sky-rams.png";
import mirchi from "@/assets/partners/mirchi.png";
import suryan from "@/assets/partners/suryan-fm.png";
import moc from "@/assets/partners/made-of-coimbatore.png";
import weLove from "@/assets/partners/we-love-coimbatore.png";
import cinemaTicket from "@/assets/partners/cinema-ticket.png";
import sportfy from "@/assets/partners/sportfy.png";
import koodu from "@/assets/credits/koodu.png";
import twentyThree from "@/assets/credits/twenty-three.jpg";

export type Partner = {
  name: string;
  logo?: string;
  darkPlate?: boolean;
};

export const MEDIA_PARTNERS: Partner[] = [
  { name: "The Covai Mail", logo: covaiMail, darkPlate: true },
  { name: "Sky Rams", logo: skyRams, darkPlate: true },
  { name: "Mirchi", logo: mirchi, darkPlate: true },
  { name: "93.5 Suryan FM", logo: suryan },
];

export const DIGITAL_PARTNERS: Partner[] = [
  { name: "Made of Coimbatore (MOC)", logo: moc },
  { name: "We Love Coimbatore", logo: weLove, darkPlate: true },
  { name: "Cinema Ticket", logo: cinemaTicket, darkPlate: true },
];

export const BOOKING_PARTNERS: Partner[] = [
  { name: "Sportfy", logo: sportfy, darkPlate: true },
];

export const MULTIPLEX_PARTNERS: Partner[] = [
  { name: "PVR INOX" },
];

export const EVENT_CREDITS = {
  eventBy: "Twenty Three",
  eventByLogo: twentyThree,
  decorLogo: koodu,
} as const;
