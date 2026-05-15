const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/countries.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// I'll extract the array and map over it
const updates = {
  "Jordan": { spots: 20, fields: ["Hospital Pharmacy", "Clinical Pharmacy", "Community Pharmacy", "Industrial Pharmacy", "Research"] },
  "UAE": { spots: 2, fields: ["Hospital Pharmacy", "Clinical Pharmacy"] },
  "Algeria": { spots: 9, fields: ["Hospital Pharmacy", "Clinical Pharmacy", "Community Pharmacy", "Industrial Pharmacy", "Research"] },
  "Lebanon": { spots: 7, fields: ["Hospital Pharmacy", "Clinical Pharmacy", "Community Pharmacy", "Industrial Pharmacy", "Research"] },
  "the Netherlands": { spots: "Contact the SEO for more details", fields: ["Hospital Pharmacy", "Community Pharmacy", "Industrial Pharmacy", "Research"] },
  "Türkiye": { spots: "5 - 40", fields: ["Hospital Pharmacy", "Community Pharmacy", "Research"] },
  "Burkina Faso": { spots: 4, fields: ["Hospital Pharmacy", "Clinical Pharmacy", "Community Pharmacy", "Industrial Pharmacy", "Research"] },
  "Togo": { spots: 2, fields: ["Hospital Pharmacy", "Industrial Pharmacy", "Other"] },
  "Kenya": { spots: "5 - 6", fields: ["Hospital Pharmacy", "Clinical Pharmacy", "Community Pharmacy", "Industrial Pharmacy", "Research"] },
  "Indonesia": { spots: "2 - 20", fields: ["Hospital Pharmacy", "Clinical Pharmacy", "Community Pharmacy", "Industrial Pharmacy", "Research"] },
  "Singapore": { spots: "5 - 45", fields: ["Hospital Pharmacy", "Clinical Pharmacy", "Community Pharmacy", "Industrial Pharmacy", "Research"] },
  "Malaysia": { spots: 12, fields: ["Hospital Pharmacy", "Community Pharmacy", "Research"] },
  "Nepal": { spots: 3, fields: ["Hospital Pharmacy", "Community Pharmacy", "Industrial Pharmacy"] },
  "Egypt": { spots: "10 - 99", fields: ["Hospital Pharmacy", "Clinical Pharmacy", "Community Pharmacy", "Industrial Pharmacy", "Research"] },
  "Serbia": { spots: 41, fields: ["Hospital Pharmacy", "Clinical Pharmacy", "Community Pharmacy", "Research"] },
  "Slovakia": { spots: "Contact the SEO for more details", fields: ["Hospital Pharmacy", "Community Pharmacy", "Research"] },
  "Slovenia": { spots: "Contact the SEO for more details", fields: ["Hospital Pharmacy", "Clinical Pharmacy", "Community Pharmacy", "Research"] },
  "Germany": { spots: "Contact the SEO for more details", fields: ["Hospital Pharmacy", "Community Pharmacy", "Research"] },
  "Great Britain": { spots: 30, fields: ["Hospital Pharmacy", "Community Pharmacy", "Research"] },
  "Canada": { spots: "5 - 10", fields: ["Hospital Pharmacy", "Clinical Pharmacy", "Community Pharmacy", "Industrial Pharmacy", "Research"] },
  "Taiwan": { spots: "15 - 20", fields: ["Hospital Pharmacy", "Clinical Pharmacy", "Research"] },
  "Thailand": { spots: 6, fields: ["Clinical Pharmacy"] },
  "Czechia": { spots: 32, fields: ["Clinical Pharmacy", "Community Pharmacy"] },
  "Bulgaria": { spots: 6, fields: ["Community Pharmacy"] },
  "United States of America": { spots: "Contact the SEO for more details", fields: ["Community Pharmacy", "Research"] },
  "Croatia": { spots: 15, fields: ["Community Pharmacy", "Research"] },
  "Spain": { spots: "10 - 20", fields: ["Community Pharmacy", "Research"] },
  "Hungary": { spots: 10, fields: ["Community Pharmacy", "Research"] },
  "Switzerland": { spots: 6, fields: ["Community Pharmacy"] },
  "Poland": { spots: "Contact the SEO for more details", fields: ["Community Pharmacy", "Research"] },
  "Mali": { spots: 4, fields: ["Community Pharmacy", "Research"] },
  "Australia": { spots: 20, fields: ["Community Pharmacy"] },
  "Ethiopia": { spots: 10, fields: ["Industrial Pharmacy"] },
  "Cyprus": { spots: 11, fields: ["Research"] },
  "Korea": { spots: 40, fields: ["Research", "Other"] },
  "Romania": { spots: 5, fields: ["Research"] },
  "Portugal": { spots: "Contact the SEO for more details", fields: ["Research"] },
  "Japan": { spots: 5, fields: ["Other"] }
};

// We will use regex to parse and replace
let match;
let countriesMatch = content.match(/export const countries: Country\[\] = (\[[\s\S]*?\]);/);
if (countriesMatch) {
  let countriesArrStr = countriesMatch[1];
  
  // Replace the entire countries array carefully using a custom replacer
  const tsCompiler = require('typescript');
  // It's easier to evaluate it to an object array and rewrite it.
  const vm = require('vm');
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(`var arr = ${countriesArrStr};`, sandbox);
  let countries = sandbox.arr;

  for (let c of countries) {
    // 1. If city is 'To be announced', empty or unknown, hide it -> ""
    if (!c.city || c.city.toLowerCase().includes("announced") || c.city.toLowerCase().includes("unknown")) {
      c.city = "";
    }
    
    // 2. Update spots and fields
    if (updates[c.country]) {
      c.spots = updates[c.country].spots;
      c.fields = updates[c.country].fields;
    }
  }

  // Convert back to TS string
  let newArrStr = JSON.stringify(countries, null, 2)
    // Remove quotes from keys
    .replace(/"([^"]+)":/g, "$1:");

  content = content.replace(countriesMatch[1], newArrStr);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log("Updated countries successfully.");
} else {
  console.log("Could not find countries array.");
}
