export interface IndustrySubItem {
  label: string;
  href: string;
}

export interface IndustryCategory {
  label: string;
  href: string;
  items: IndustrySubItem[];
}

export const industryCategories: IndustryCategory[] = [
  {
    label: "Education",
    href: "/industries/education",
    items: [
      { label: "Pre-schools & Daycares", href: "/industries/education" },
      { label: "K-12 Schools", href: "/industries/education" },
      { label: "Colleges", href: "/industries/education" },
      { label: "Universities", href: "/industries/education" },
      { label: "Coaching Institutes", href: "/digital-marketing-for-coaching-institutes" },
      { label: "Govt Education Programs", href: "/industries/education" },
      { label: "EdTech Platforms", href: "/industries/education" },
      { label: "Skilling & Vocational", href: "/industries/education" },
    ],
  },
  {
    label: "E-Commerce",
    href: "/industries/ecommerce",
    items: [
      { label: "D2C Brands", href: "/industries/ecommerce" },
      { label: "Marketplace Sellers", href: "/industries/ecommerce" },
      { label: "Fashion & Apparel", href: "/industries/ecommerce" },
      { label: "Electronics & Gadgets", href: "/industries/ecommerce" },
      { label: "Grocery/Quick Commerce", href: "/industries/ecommerce" },
      { label: "Home & Furniture", href: "/industries/ecommerce" },
      { label: "Beauty & Personal Care", href: "/industries/ecommerce" },
      { label: "B2B/Wholesale", href: "/industries/ecommerce" },
    ],
  },
  {
    label: "Lifestyle",
    href: "/industries/lifestyle",
    items: [
      { label: "Fashion & Apparel", href: "/industries/lifestyle" },
      { label: "Beauty & Cosmetics", href: "/industries/lifestyle" },
      { label: "Wellness & Fitness", href: "/industries/lifestyle" },
      { label: "Dermatology, Pharmacy & Wellness", href: "/industries/lifestyle" },
      { label: "Health & Wellness Retail", href: "/industries/lifestyle" },
      { label: "Home Decor & Furniture", href: "/industries/lifestyle" },
      { label: "Jewelry & Accessories", href: "/industries/lifestyle" },
      { label: "Weddings & Events", href: "/industries/lifestyle" },
    ],
  },
  {
    label: "Sports",
    href: "/industries/sports",
    items: [
      { label: "Sports Academies", href: "/industries/sports" },
      { label: "Gyms & Fitness Studios", href: "/industries/sports" },
      { label: "Sports Events/Tournaments", href: "/industries/sports" },
      { label: "Sports Teams/Clubs", href: "/industries/sports" },
      { label: "Equipment & Gear Brands", href: "/industries/sports" },
      { label: "Individual Athletes", href: "/industries/sports" },
      { label: "Sports Tech & Apps", href: "/industries/sports" },
    ],
  },
  {
    label: "Businesses (B2B)",
    href: "/industries/b2b",
    items: [
      { label: "Startups & SaaS", href: "/industries/b2b" },
      { label: "BFSI", href: "/industries/b2b" },
      { label: "Real Estate & Construction", href: "/industries/b2b" },
      { label: "Manufacturing/Industrial", href: "/industries/b2b" },
      { label: "Professional Services", href: "/industries/b2b" },
      { label: "Logistics & Supply Chain", href: "/industries/b2b" },
      { label: "IT & Tech Services", href: "/industries/b2b" },
    ],
  },
  {
    label: "Hotel Management & Hospitality",
    href: "/industries/hospitality",
    items: [
      { label: "Hotels & Resorts", href: "/industries/hospitality" },
      { label: "Restaurants & Cafes", href: "/industries/hospitality" },
      { label: "Cloud Kitchens", href: "/industries/hospitality" },
      { label: "Travel & Tourism", href: "/industries/hospitality" },
      { label: "Banquet Halls & Event Venues", href: "/industries/hospitality" },
      { label: "Spa & Wellness Resorts", href: "/industries/hospitality" },
    ],
  },
];
