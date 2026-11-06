import anand from "@/assets/sponsors/anand.png";
import bridgewoods from "@/assets/sponsors/bridgewoods-international-school.png";
import sumangali from "@/assets/sponsors/sumangali-jewellers.png";
import cityCars from "@/assets/sponsors/city-cars-coimbatore.png";
import msRice from "@/assets/sponsors/ms-rice.png";
import wondr from "@/assets/sponsors/wondr-diamonds.png";
import tastee from "@/assets/sponsors/tastee-masala.png";
import smb from "@/assets/sponsors/smb.png";
import ssvm from "@/assets/sponsors/ssvm-institutions.png";
import greenBowl from "@/assets/sponsors/the-green-bowl-community.png";
import hita from "@/assets/sponsors/hita.jpg";
import psr from "@/assets/sponsors/psr-silk-sarees.png";
import nalam from "@/assets/sponsors/nalam.png";
import ayyappa from "@/assets/sponsors/ayyappa-ghee.png";
import ruhi from "@/assets/sponsors/ruhi-continuum-school.png";
import tvs from "@/assets/sponsors/tvs-sundaram-motors.png";
import sanbrix from "@/assets/sponsors/sanbrix-properties.png";
import lakshmi from "@/assets/sponsors/lakshmi-ceramics.png";
import aroma from "@/assets/sponsors/aroma.png";
import kiara from "@/assets/sponsors/kiara-fine-jewellery.png";
import tourOn from "@/assets/sponsors/tour-on.png";
import beautyWares from "@/assets/sponsors/beauty-wares.png";
import shreeAnandhaas from "@/assets/sponsors/shree-anandhaas.png";
import aryaBhavan from "@/assets/sponsors/arya-bhavan.png";
import clusters from "@/assets/sponsors/clusters-media-college.png";
import pps from "@/assets/sponsors/pps-motors.png";
import majestin from "@/assets/sponsors/majestin-jewels.png";
import hotelThai from "@/assets/sponsors/hotel-thai.png";
import vivekalaya from "@/assets/sponsors/vivekalaya-school.png";
import rao from "@/assets/sponsors/rao-hospital.png";
import vilva from "@/assets/sponsors/vilva-jewels.png";
import mount from "@/assets/sponsors/mount-group.png";

export type Sponsor = {
  name: string;
  logo?: string;
  /** Logos extracted on black plates — render on dark cells */
  darkPlate?: boolean;
};

export const SPONSORS: Sponsor[] = [
  { name: "Anand", logo: anand },
  { name: "Bridgewoods International School", logo: bridgewoods },
  { name: "Sumangali Jewellers", logo: sumangali, darkPlate: true },
  { name: "City Cars Coimbatore", logo: cityCars, darkPlate: true },
  { name: "MS Rice", logo: msRice, darkPlate: true },
  { name: "Puthiya India" },
  { name: "Wondr Diamonds", logo: wondr, darkPlate: true },
  { name: "Tastee Masala", logo: tastee, darkPlate: true },
  { name: "SMB", logo: smb, darkPlate: true },
  { name: "SSVM Institutions", logo: ssvm },
  { name: "Pressana Group" },
  { name: "The Green Bowl Community", logo: greenBowl, darkPlate: true },
  { name: "Hita", logo: hita },
  { name: "PSR Silk Sarees", logo: psr, darkPlate: true },
  { name: "Nalam", logo: nalam, darkPlate: true },
  { name: "Ayyappa Ghee", logo: ayyappa },
  { name: "Ruhi Continuum School", logo: ruhi },
  { name: "TVS Sundaram Motors", logo: tvs, darkPlate: true },
  { name: "Sanbrix Properties", logo: sanbrix, darkPlate: true },
  { name: "Lakshmi Ceramics", logo: lakshmi, darkPlate: true },
  { name: "Aroma", logo: aroma, darkPlate: true },
  { name: "Kiara Fine Jewellery", logo: kiara, darkPlate: true },
  { name: "Tour On", logo: tourOn, darkPlate: true },
  { name: "Beauty Wares", logo: beautyWares, darkPlate: true },
  { name: "Shree Anandhaas", logo: shreeAnandhaas, darkPlate: true },
  { name: "Arya Bhavan", logo: aryaBhavan, darkPlate: true },
  { name: "Clusters Media College", logo: clusters, darkPlate: true },
  { name: "PPS Motors", logo: pps, darkPlate: true },
  { name: "Majestin Jewels", logo: majestin, darkPlate: true },
  { name: "Hotel Thai", logo: hotelThai, darkPlate: true },
  { name: "Vivekalaya School", logo: vivekalaya, darkPlate: true },
  { name: "Rao Hospital", logo: rao, darkPlate: true },
  { name: "Vilva Jewels", logo: vilva, darkPlate: true },
  { name: "Vichara World School" },
  { name: "Mount Group", logo: mount, darkPlate: true },
];
