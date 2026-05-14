const fs = require('fs');
const data = fs.readFileSync('scratch/countries.json', 'utf8');
const tsContent = `export interface Country {
  country: string;
  city: string;
  fields: string[];
  dates: string;
  duration: string;
  spots: number | string;
  status: 'Open' | 'Limited' | 'Coming Soon';
  note: string;
}

// EDIT THIS ARRAY to update the available SEP destinations.
// You can add, remove, or modify the objects below.
export const countries: Country[] = ${data.replace(/"([^"]+)":/g, '$1:')};
`;

fs.writeFileSync('src/data/countries.ts', tsContent);
