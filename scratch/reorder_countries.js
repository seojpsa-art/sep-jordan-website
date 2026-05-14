const fs = require('fs');

const file = 'src/data/countries.ts';
let content = fs.readFileSync(file, 'utf8');

// The file exports a Country interface and a countries array.
// We need to parse the array, modify it, and write it back.

// Easiest is to use regex or eval if safe.
// Since it's a TS file with `export const countries: Country[] = [...]`, we can extract the JSON part.

const jsonStrMatch = content.match(/export const countries: Country\[\] = (\[[\s\S]*\]);/);

if (jsonStrMatch) {
    let jsonStr = jsonStrMatch[1];
    
    // Fix non-quoted keys for JSON.parse
    jsonStr = jsonStr.replace(/([{,]\s*)([A-Za-z0-9_]+)\s*:/g, '$1"$2":');
    
    let countries;
    try {
        countries = JSON.parse(jsonStr);
    } catch (e) {
        console.error("Parse error", e);
        process.exit(1);
    }
    
    // Find Spain and Egypt
    const spainIndex = countries.findIndex(c => c.country === 'Spain');
    const egyptIndex = countries.findIndex(c => c.country === 'Egypt');
    
    let spain, egypt;
    
    if (spainIndex !== -1) {
        spain = countries.splice(spainIndex, 1)[0];
    } else {
        spain = {
            country: "Spain",
            city: "To be announced",
            continent: "Europe",
            fields: ["Community Pharmacy", "Hospital Pharmacy", "Research"],
            dates: "To be announced",
            duration: "2-4 weeks",
            spots: "To be announced",
            status: "Open",
            note: "A European SEP destination example. Final availability and details can be updated later."
        };
    }
    
    if (egyptIndex !== -1) {
        // Need to find it again because array was mutated
        const newEgyptIndex = countries.findIndex(c => c.country === 'Egypt');
        if (newEgyptIndex !== -1) {
            egypt = countries.splice(newEgyptIndex, 1)[0];
        }
    } else {
        egypt = {
            country: "Egypt",
            city: "Cairo / Alexandria",
            continent: "Africa",
            fields: ["Community Pharmacy", "Hospital Pharmacy", "Clinical Pharmacy"],
            dates: "To be announced",
            duration: "2-4 weeks",
            spots: "To be announced",
            status: "Open",
            note: "An Arab SEP destination example. Final availability and details can be updated later."
        };
    }
    
    spain.featured = true;
    egypt.featured = true;
    
    countries.unshift(egypt);
    countries.unshift(spain);
    
    const newTsContent = `export interface Country {
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
export const countries: Country[] = ${JSON.stringify(countries, null, 2).replace(/"([^"]+)":/g, '$1:')};
`;

    fs.writeFileSync('src/data/countries.ts', newTsContent);
    console.log("Updated countries.ts");
} else {
    console.log("Could not match array");
}

