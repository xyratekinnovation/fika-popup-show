/**
 * Single source of truth for FIKA site content and conversion URLs.
 * Content sourced from official fika 2027.pdf reference.
 */

/** Stall registration — Book Your Stall CTAs */
export const BOOK_STALL_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeLnrnHAo84W4xU9VaHUGf9VXHk2HTDD6bqS0KmM4TnK2KPdA/viewform?usp=dialog";

/** Partnership application — Become a Partner CTAs */
export const PARTNER_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScPoM8pzo-opljxMJWS_9KhG-OxGu7JYlIsqZxOowTE8S5iUw/viewform?usp=publish-editor";

export const SITE = {
  brand: "Fika Pop-Up Show",
  established: "Since 2021",
  eventName: "Fika Pop-Up Show — 9th Edition",
  eventEdition: "9th Edition",
  eventDate: "January 02 & 03, 2026",
  venue: "Lakshmi Mills Urban Centre",
  city: "Coimbatore",
  email: "fikapopupshow@gmail.com",
  phone: "+91 7200 82 2323",
  /** Digits-only for tel: links */
  phoneTel: "+917200822323",
  address: "Coimbatore",
  instagramHandle: "@fikapopupshow",
  instagram: "https://www.instagram.com/fikapopupshow/",
  facebook: "https://www.facebook.com/profile.php?id=61564483601274",
  eventBy: "Twenty Three",
  decorBy: "Koodu",
  tagline:
    "An exciting one-of-its-kind pop-up experience right here in the centre of Coimbatore. Shopping, food, music and a whole lot of fun and frolic.",
  fikaMeaning:
    "Fika is a Swedish tradition of taking a break with coffee or tea and a snack to socialize with friends and colleagues.",
  communityLine: "Fika unites diverse city communities, showcasing talent and fostering public engagement.",
  categoriesLine:
    "Clothes | Accessories | Skincare | Home Decor | Food | Gourmet | Workshops | Music & More",
  /** @deprecated Prefer bookStallFormUrl — kept for clarity in older call sites */
  bookingFormUrl: BOOK_STALL_FORM_URL,
  bookStallFormUrl: BOOK_STALL_FORM_URL,
  partnerFormUrl: PARTNER_FORM_URL,
};

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Our Journey" },
  { id: "achievements", label: "Achievements" },
  { id: "sponsors", label: "Sponsors & Partners" },
  { id: "team", label: "Our Team" },
  { id: "contact", label: "Contact" },
] as const;

/** Collaborate section — Exhibitors & Partnerships cards */
export const COLLABORATE = {
  exhibitor: {
    id: "exhibitors",
    eyebrow: "For exhibitors",
    title: "Have a Brand Worth Discovering?",
    body: "Showcase your products, connect with new audiences and become part of a vibrant creative community.",
    cta: "Become an exhibitor",
    formUrl: BOOK_STALL_FORM_URL,
    alt: "A brand founder arranging products at her booth",
  },
  partnership: {
    id: "partnerships",
    eyebrow: "For brand partners",
    title: "Let's Create Something Together.",
    body: "Partner with Fika for meaningful brand integrations, experiential activations and creative collaborations.",
    cta: "Partner with Fika",
    formUrl: PARTNER_FORM_URL,
    alt: "Guests relaxing at a brand activation lounge",
  },
} as const;

export const FOOTER = {
  tagline:
    "A thoughtfully curated lifestyle pop-up show celebrating independent brands, creative entrepreneurs and community. Established since 2021.",
  workWithUs: [
    { label: "Exhibitor enquiry", href: BOOK_STALL_FORM_URL, external: true },
    { label: "Brand partnerships", href: PARTNER_FORM_URL, external: true },
  ],
} as const;

export const VISION = {
  title: "Our Vision",
  paragraphs: [
    "To create more than just a shopping destination to build a vibrant lifestyle platform that brings independent brands, creative entrepreneurs and communities together.",
    "Fika envisions becoming a celebrated experiential marketplace where discovering brands, exploring creativity and connecting with people come together under one roof.",
    "Our vision is to create spaces that inspire discovery, encourage entrepreneurship, celebrate local talent and make every edition a memorable experience.",
  ],
} as const;

export const MISSION = {
  title: "Our Mission",
  paragraphs: [
    "To create accessible yet curated platforms that empower independent brands, support emerging entrepreneurs and bring communities together through meaningful shopping and lifestyle experiences.",
    "At Fika, our mission is to provide brands with opportunities to grow, connect them with the right audience and curate engaging spaces that celebrate creativity, local talent and entrepreneurship.",
  ],
} as const;
