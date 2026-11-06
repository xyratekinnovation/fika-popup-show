import fashion from "@/assets/images/cat-fashion.jpg";
import accessories from "@/assets/images/cat-accessories.jpg";
import home from "@/assets/images/cat-home.jpg";
import food from "@/assets/images/cat-food.jpg";
import art from "@/assets/images/cat-art.jpg";
import workshop from "@/assets/images/cat-workshop.jpg";

/** Visual category tiles — labels aligned to official brochure categories */
export const CATEGORIES = [
  { t: "Clothes", img: fashion },
  { t: "Accessories", img: accessories },
  { t: "Skincare", img: art },
  { t: "Home Decor", img: home },
  { t: "Food & Gourmet", img: food },
  { t: "Workshops & Music", img: workshop },
] as const;
