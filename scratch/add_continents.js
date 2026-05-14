const fs = require('fs');

const data = JSON.parse(fs.readFileSync('scratch/countries.json', 'utf8'));

const continentMap = {
  "Burkina Faso": "Africa",
  "Togo": "Africa",
  "Kenya": "Africa",
  "Indonesia": "Asia",
  "Singapore": "Asia",
  "Malaysia": "Asia",
  "Nepal": "Asia",
  "Egypt": "Africa",
  "UAE": "Asia",
  "Jordan": "Asia",
  "Algeria": "Africa",
  "Lebanon": "Asia",
  "the Netherlands": "Europe",
  "Türkiye": "Europe",
  "Serbia": "Europe",
  "Slovakia": "Europe",
  "Slovenia": "Europe",
  "Germany": "Europe",
  "Great Britain": "Europe",
  "Canada": "North America",
  "Taiwan": "Asia",
  "Czechia": "Europe",
  "Thailand": "Asia",
  "Mali": "Africa",
  "Australia": "Oceania",
  "Poland": "Europe",
  "Spain": "Europe",
  "Hungary": "Europe",
  "Switzerland": "Europe",
  "Croatia": "Europe",
  "Bulgaria": "Europe",
  "United States of America": "North America",
  "Portugal": "Europe",
  "Ethiopia": "Africa",
  "Cyprus": "Europe",
  "Korea": "Asia",
  "Romania": "Europe",
  "Japan": "Asia"
};

const updatedData = data.map(c => ({
    ...c,
    continent: continentMap[c.country] || "Other"
}));

const tsContent = `export interface Country {
  country: string;
  city: string;
  continent: string;
  fields: string[];
  dates: string;
  duration: string;
  spots: number | string;
  status: 'Open' | 'Limited' | 'Coming Soon';
  note: string;
}

// EDIT THIS ARRAY to update the available SEP destinations.
// You can add, remove, or modify the objects below.
export const countries: Country[] = ${JSON.stringify(updatedData, null, 2).replace(/"([^"]+)":/g, '$1:')};
`;

fs.writeFileSync('src/data/countries.ts', tsContent);
