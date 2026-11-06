import fashion from "@/assets/images/cat-fashion.jpg";
import accessories from "@/assets/images/cat-accessories.jpg";
import home from "@/assets/images/cat-home.jpg";
import food from "@/assets/images/cat-food.jpg";
import art from "@/assets/images/cat-art.jpg";
import workshop from "@/assets/images/cat-workshop.jpg";
import community from "@/assets/images/gallery-community.jpg";
import arch from "@/assets/images/gallery-arch.jpg";

export const GALLERY = [
  { src: fashion, alt: "Pastel linen dresses", cls: "row-span-2" },
  { src: community, alt: "Friends shopping together", cls: "col-span-2" },
  { src: food, alt: "Artisan pastries counter", cls: "" },
  { src: arch, alt: "Floral entrance arch", cls: "row-span-2" },
  { src: home, alt: "Home décor display", cls: "" },
  { src: art, alt: "Artist with prints and ceramics", cls: "" },
  { src: accessories, alt: "Handmade bags and jewellery", cls: "" },
  { src: workshop, alt: "Flower workshop", cls: "col-span-2" },
] as const;
