export interface Testimonial {
  name: string;
  country: string;
  field: string;
  year: string;
  quote: string;
  image: string;
}

// EDIT THIS ARRAY to update the testimonials shown in the "Stories From Previous Outgoings" section.
export const testimonials: Testimonial[] = [
  {
    name: "Saif",
    country: "Poland",
    field: "Research in Biology and Botany",
    year: "2025",
    quote: "Participating in the SEP in Poland was a truly enriching experience. It offered the perfect balance of professional learning and cultural discovery. I had the opportunity to learn from experts in the field of biology and botany, and explore Poland's stunning landmarks and vibrant cities, especially the amazing city of Łódź. It was a journey that will always be in my heart!",
    image: "/students/placeholder.svg" // We will use a generic placeholder or Lucide icon as fallback if no image provided
  },
  {
    name: "Maya & Noor",
    country: "Malaysia",
    field: "Research in Pharmacology and Cancer Biology",
    year: "2024",
    quote: "Participating in the SEP in Malaysia was an exceptional research experience filled with learning, collaboration, and scientific exploration. We trained at the University of Cyberjaya under the guidance of Prof. Dr. Mahan, Dr. Munira, and Dr. Shamima, working on two research projects focusing on metabolic disorder models and in-vitro anti-cancer evaluation. It was a deeply rewarding journey filled with scientific growth, teamwork, and unforgettable memories.",
    image: "/students/placeholder.svg"
  },
  {
    name: "Naser",
    country: "Portugal (Lisbon)",
    field: "Community Pharmacy",
    year: "To be announced",
    quote: "Participating in the SEP program in Lisbon was an enriching and diverse learning experience. I trained at Farmacia Estacio Xabregas across multiple sectors: receiving and organizing medications from suppliers, preparing pharmaceuticals such as creams and capsules in the laboratory, and finally engaging directly with patients and dispensing medications. Beyond the professional training, the experience exposed me to new cultures, developed practices, and a deeper understanding of pharmacy work in other countries. It remains one of the most valuable opportunities SEP has offered me.",
    image: "/students/placeholder.svg"
  }
];
