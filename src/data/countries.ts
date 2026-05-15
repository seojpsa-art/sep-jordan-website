export interface Country {
  country: string;
  city: string;
  continent: string;
  fields: string[];
  dates: string;
  duration: string;
  spots: number | string;
  status: 'Open' | 'Limited' | 'Coming Soon';
  note: string;
  featured?: boolean;
}

// EDIT THIS ARRAY to update the available SEP destinations.
// You can add, remove, or modify the objects below.
export const countries: Country[] = [
  {
    country: "Spain",
    city: "",
    fields: [
      "Community Pharmacy",
      "Research"
    ],
    dates: "June, July, August and September",
    duration: "2 weeks - 2 months. Preferably 2 weeks-1 month.",
    spots: "10 - 20",
    status: "Open",
    note: "Depending on the host, languages/year level may differ. A good level of English is compulsory (B2) and we highly recommend at least a basic level of Spanish. We recommend SEP for +3rd year, but this is not compulsory. We require a CV, a motivation letter and a Civil Responsibility Insurance.",
    continent: "Europe",
    featured: true
  },
  {
    country: "Egypt",
    city: "",
    fields: [
      "Hospital Pharmacy",
      "Clinical Pharmacy",
      "Community Pharmacy",
      "Industrial Pharmacy",
      "Research"
    ],
    dates: "June,August and September.",
    duration: "2 weeks - 1 month",
    spots: "10 - 99",
    status: "Open",
    note: "English and arabic speakers and no specific academic years.",
    continent: "Africa",
    featured: true
  },
  {
    country: "Burkina Faso",
    city: "",
    fields: [
      "Hospital Pharmacy",
      "Clinical Pharmacy",
      "Community Pharmacy",
      "Industrial Pharmacy",
      "Research"
    ],
    dates: "April-July",
    duration: "2 weeks - 6 weeks",
    spots: 4,
    status: "Open",
    note: "Year level, required documents",
    continent: "Africa"
  },
  {
    country: "Togo",
    city: "",
    fields: [
      "Hospital Pharmacy",
      "Industrial Pharmacy",
      "Other"
    ],
    dates: "August, September, October ",
    duration: "1 month",
    spots: 2,
    status: "Open",
    note: "Year level, documents",
    continent: "Africa"
  },
  {
    country: "Kenya",
    city: "",
    fields: [
      "Hospital Pharmacy",
      "Clinical Pharmacy",
      "Community Pharmacy",
      "Industrial Pharmacy",
      "Research"
    ],
    dates: "April, May, June, August, September",
    duration: "4-6 Weeks",
    spots: "5 - 6",
    status: "Open",
    note: "Year 3 and Above, Name Tag and Lab coat, A box of Gloves and masks.",
    continent: "Africa"
  },
  {
    country: "Indonesia",
    city: "",
    fields: [
      "Hospital Pharmacy",
      "Clinical Pharmacy",
      "Community Pharmacy",
      "Industrial Pharmacy",
      "Research"
    ],
    dates: "June – August",
    duration: "3 weeks - 1 month",
    spots: "2 - 20",
    status: "Open",
    note: "Knowledge of the English Language",
    continent: "Asia"
  },
  {
    country: "Singapore",
    city: "",
    fields: [
      "Hospital Pharmacy",
      "Clinical Pharmacy",
      "Community Pharmacy",
      "Industrial Pharmacy",
      "Research"
    ],
    dates: "April 2026 to September 2026",
    duration: "1 month to 3 months",
    spots: "5 - 45",
    status: "Open",
    note: "Fluent in English, Second Year and above, CV, motivational letter",
    continent: "Asia"
  },
  {
    country: "Malaysia",
    city: "",
    fields: [
      "Hospital Pharmacy",
      "Community Pharmacy",
      "Research"
    ],
    dates: "Mid of July - Mid of September",
    duration: "2 weeks to 1 month",
    spots: 12,
    status: "Open",
    note: "Proof in english proficiency ( Good in English )",
    continent: "Asia"
  },
  {
    country: "Nepal",
    city: "",
    fields: [
      "Hospital Pharmacy",
      "Community Pharmacy",
      "Industrial Pharmacy"
    ],
    dates: "August-September",
    duration: "2 to 4 weeks",
    spots: 3,
    status: "Coming Soon",
    note: "CV and Motivation letter required.",
    continent: "Asia"
  },
  {
    country: "UAE",
    city: "",
    fields: [
      "Hospital Pharmacy",
      "Clinical Pharmacy"
    ],
    dates: "April-June",
    duration: "1 month",
    spots: 2,
    status: "Open",
    note: "Pharmacy students at any level",
    continent: "Asia"
  },
  {
    country: "Jordan",
    city: "",
    fields: [
      "Hospital Pharmacy",
      "Clinical Pharmacy",
      "Community Pharmacy",
      "Industrial Pharmacy",
      "Research"
    ],
    dates: "Mid June (6) - mid September (9)",
    duration: "2-4 weeks ",
    spots: 20,
    status: "Open",
    note: "Pharmacy students in their 2nd year or above. English is required and Arabic language is a plus. Willingness to participate in cultural exchange and community events.",
    continent: "Asia"
  },
  {
    country: "Algeria",
    city: "",
    fields: [
      "Hospital Pharmacy",
      "Clinical Pharmacy",
      "Community Pharmacy",
      "Industrial Pharmacy",
      "Research"
    ],
    dates: "The period of mid-June July and September.",
    duration: "Approximately 2 to 3 weeks, depending of the request and field of internship the SEO will work on making it as flexible as possible to satisfy most of demands",
    spots: 9,
    status: "Open",
    note: "English is required as it’s well spoken by the young generation, but not the common population French is used by most of the algerian people,it would make your daily life easier,but it’s not required Arabic is the native language of algerians, but we don’t use it on a daily basis, we use our own dialect which is called “Darja”             All interested students are welcome, we do not have any additional requirements.",
    continent: "Africa"
  },
  {
    country: "Lebanon",
    city: "",
    fields: [
      "Hospital Pharmacy",
      "Clinical Pharmacy",
      "Community Pharmacy",
      "Industrial Pharmacy",
      "Research"
    ],
    dates: "April-August",
    duration: "2 weeks - 1 month",
    spots: 7,
    status: "Open",
    note: "Languages:  English/ Arabic/ French",
    continent: "Asia"
  },
  {
    country: "the Netherlands",
    city: "",
    fields: [
      "Hospital Pharmacy",
      "Community Pharmacy",
      "Industrial Pharmacy",
      "Research"
    ],
    dates: "June-September",
    duration: "2 weeks - 2 months",
    spots: "Contact the SEO for more details",
    status: "Coming Soon",
    note: "Proficient in English (B2)",
    continent: "Europe"
  },
  {
    country: "Türkiye",
    city: "",
    fields: [
      "Hospital Pharmacy",
      "Community Pharmacy",
      "Research"
    ],
    dates: "All months",
    duration: "2 weeks to 8 weeks",
    spots: "5 - 40",
    status: "Open",
    note: "English proficiency",
    continent: "Europe"
  },
  {
    country: "Serbia",
    city: "",
    fields: [
      "Hospital Pharmacy",
      "Clinical Pharmacy",
      "Community Pharmacy",
      "Research"
    ],
    dates: "June, July, and August. Every year each city organizes SEP with slight variations in the starting and ending dates depending on the schedules we set in collaboration with other institutions and incoming students.",
    duration: "The length of practice is usually 1 month, but in some cases, we can provide shorter or longer stays (2 or 3 weeks up to 6 weeks).",
    spots: 41,
    status: "Open",
    note: "None",
    continent: "Europe"
  },
  {
    country: "Slovakia",
    city: "",
    fields: [
      "Hospital Pharmacy",
      "Community Pharmacy",
      "Research"
    ],
    dates: "July",
    duration: "2 weeks",
    spots: "Contact the SEO for more details",
    status: "Coming Soon",
    note: "B2 level in English",
    continent: "Europe"
  },
  {
    country: "Slovenia",
    city: "",
    fields: [
      "Hospital Pharmacy",
      "Clinical Pharmacy",
      "Community Pharmacy",
      "Research"
    ],
    dates: "May - September ",
    duration: "Depends on the host site, usually 2 weeks - 1 month",
    spots: "Contact the SEO for more details",
    status: "Coming Soon",
    note: "English (at least B2 level)",
    continent: "Europe"
  },
  {
    country: "Germany",
    city: "",
    fields: [
      "Hospital Pharmacy",
      "Community Pharmacy",
      "Research"
    ],
    dates: "June/July-September",
    duration: "Flexible",
    spots: "Contact the SEO for more details",
    status: "Coming Soon",
    note: "For community pharmacy is under certain circumstances an advanced level of german necessary. No appartment is guaranteed, the SEO and LEO are supporting with the search of appartments",
    continent: "Europe"
  },
  {
    country: "Great Britain",
    city: "",
    fields: [
      "Hospital Pharmacy",
      "Community Pharmacy",
      "Research"
    ],
    dates: "March-September",
    duration: "1 week- 1 month ",
    spots: 30,
    status: "Open",
    note: "Ease in speaking, reading and writing English",
    continent: "Europe"
  },
  {
    country: "Canada",
    city: "",
    fields: [
      "Hospital Pharmacy",
      "Clinical Pharmacy",
      "Community Pharmacy",
      "Industrial Pharmacy",
      "Research"
    ],
    dates: "May - August 2026",
    duration: "2-8 weeks",
    spots: "5 - 10",
    status: "Open",
    note: "English speaking (unless Quebec -> french speaking atleast)",
    continent: "North America"
  },
  {
    country: "Taiwan",
    city: "",
    fields: [
      "Hospital Pharmacy",
      "Clinical Pharmacy",
      "Research"
    ],
    dates: "June - September",
    duration: "2weeks~1month",
    spots: "15 - 20",
    status: "Open",
    note: "TBC",
    continent: "Asia"
  },
  {
    country: "Czechia",
    city: "",
    fields: [
      "Clinical Pharmacy",
      "Community Pharmacy"
    ],
    dates: "July, August. Most placements will take place in July. ",
    duration: "2-3 weeks ",
    spots: 32,
    status: "Coming Soon",
    note: "No specific requirements",
    continent: "Europe"
  },
  {
    country: "Thailand",
    city: "",
    fields: [
      "Clinical Pharmacy"
    ],
    dates: "July–August",
    duration: "2 weeks",
    spots: 6,
    status: "Open",
    note: "- Open for All Years of Pharmacy Students - Any English Proficiency Level Welcome - Application form with a recent color photograph (2” or 4×6 cm) - CV or resume - State of purpose (maximum 200 words) in the application form - Transcript  - Proof of health insurance  - Vaccine immunization record - Acceptance letter from the Faculty of Pharmacy, MSU (Host site will prepare for students)",
    continent: "Asia"
  },
  {
    country: "Mali",
    city: "",
    fields: [
      "Community Pharmacy",
      "Research"
    ],
    dates: "Any month",
    duration: "1 month",
    spots: 4,
    status: "Open",
    note: "English and French, 2 year in pharmacy school at least, motivation letter",
    continent: "Africa"
  },
  {
    country: "Australia",
    city: "",
    fields: [
      "Community Pharmacy"
    ],
    dates: "Any except December-January ",
    duration: "1 month",
    spots: 20,
    status: "Open",
    note: "Conversation Level English - Working English proficiency",
    continent: "Oceania"
  },
  {
    country: "Poland",
    city: "",
    fields: [
      "Community Pharmacy",
      "Research"
    ],
    dates: "July-September",
    duration: "2 weeks",
    spots: "Contact the SEO for more details",
    status: "Coming Soon",
    note: "3rd year+, visa if not from EU, communicative english skills",
    continent: "Europe"
  },
  {
    country: "Hungary",
    city: "",
    fields: [
      "Community Pharmacy",
      "Research"
    ],
    dates: "July, August ",
    duration: "Maximum 1 month",
    spots: 10,
    status: "Open",
    note: "B2 English or Hungarian",
    continent: "Europe"
  },
  {
    country: "Switzerland",
    city: "",
    fields: [
      "Community Pharmacy"
    ],
    dates: "June - September ",
    duration: "2 weeks",
    spots: 6,
    status: "Open",
    note: "German B2 French B2",
    continent: "Europe"
  },
  {
    country: "Croatia",
    city: "",
    fields: [
      "Community Pharmacy",
      "Research"
    ],
    dates: "July, August, September ",
    duration: "2 weeks",
    spots: 15,
    status: "Open",
    note: "TBC",
    continent: "Europe"
  },
  {
    country: "Bulgaria",
    city: "",
    fields: [
      "Community Pharmacy"
    ],
    dates: "June, July, August and September 2026",
    duration: "2 - 6 weeks",
    spots: 6,
    status: "Open",
    note: "The students should be able to have proper skills in English. The knowledge of any other language is a plus, but not required. We kindly appreciate it if a candidate with a language different from English will contact us in advance (Serbian,Croatian, Macedonian,Slovenian, Russian). No requirment for year level.",
    continent: "Europe"
  },
  {
    country: "United States of America",
    city: "",
    fields: [
      "Community Pharmacy",
      "Research"
    ],
    dates: "May-Aug (tentative)",
    duration: "To be announced",
    spots: "Contact the SEO for more details",
    status: "Coming Soon",
    note: "English fluency, TBC for others",
    continent: "North America"
  },
  {
    country: "Portugal",
    city: "",
    fields: [
      "Research"
    ],
    dates: "June - September",
    duration: "Depends on the host site, usually 2 weeks - 1 month",
    spots: "Contact the SEO for more details",
    status: "Coming Soon",
    note: "Knowledge of the English language",
    continent: "Europe"
  },
  {
    country: "Ethiopia",
    city: "",
    fields: [
      "Industrial Pharmacy"
    ],
    dates: "June,July ,August ",
    duration: "2- 4 weeks",
    spots: 10,
    status: "Open",
    note: "Year level -3 and above Language proficiency- C2",
    continent: "Africa"
  },
  {
    country: "Cyprus",
    city: "",
    fields: [
      "Research"
    ],
    dates: "July",
    duration: "2 weeks",
    spots: 11,
    status: "Open",
    note: "Good command of English  Students who have completed at least 4 semesters. Graduates are also welcome to apply.",
    continent: "Europe"
  },
  {
    country: "Korea",
    city: "",
    fields: [
      "Research",
      "Other"
    ],
    dates: "June - August",
    duration: "2 - 4 weeks",
    spots: 40,
    status: "Open",
    note: "English proficiency is highly required.",
    continent: "Asia"
  },
  {
    country: "Romania",
    city: "",
    fields: [
      "Research"
    ],
    dates: "Only the month of July ",
    duration: "2 weeks ",
    spots: 5,
    status: "Open",
    note: "Knowledge of English language (B2 level).",
    continent: "Europe"
  },
  {
    country: "Japan",
    city: "",
    fields: [
      "Other"
    ],
    dates: "August",
    duration: "2 weeks",
    spots: 5,
    status: "Open",
    note: "Language requirements; English (Able to communicate and discuss) If you understand about medical system or the role of pharmacist in each occupation, their grade won’t be problem.",
    continent: "Asia"
  }
];
