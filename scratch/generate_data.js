const xlsx = require('xlsx');
const fs = require('fs');

const file = 'data/sep_placements.xlsx.xlsx';
const workbook = xlsx.readFile(file);

const countriesMap = {};

workbook.SheetNames.forEach(sheetName => {
    if (sheetName.toLowerCase().includes('main') || sheetName.toLowerCase().includes('guideline') || sheetName.toLowerCase().includes('introduction')) return;
    
    const field = sheetName.trim();
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet, {header: 1});
    
    for (let r = 0; r < data.length - 3; r++) {
        const row = data[r];
        // The country names are typically followed by an empty row, then "Placements Available"
        const placementsRow = data[r+2];
        if (!row || !placementsRow) continue;
        
        let hasPlacementsText = false;
        for (let c = 0; c < placementsRow.length; c++) {
            if (typeof placementsRow[c] === 'string' && placementsRow[c].includes("Placements Available")) {
                hasPlacementsText = true;
                break;
            }
        }
        
        if (hasPlacementsText) {
            for (let c = 0; c < row.length; c++) {
                let countryText = row[c];
                if (countryText && typeof countryText === 'string') {
                    if (countryText.includes("AfRO") || countryText.includes("APRO") || countryText.includes("EMRO")) continue;

                    let parts = countryText.split(',');
                    let countryName = parts.length > 1 ? parts[parts.length - 1].trim() : countryText.trim();
                    
                    let spots = data[r+3] ? data[r+3][c] : "To be announced";
                    let dates = data[r+3] ? data[r+3][c+5] : "To be announced";
                    let duration = data[r+4] ? data[r+4][c+5] : "To be announced";
                    let reqs = data[r+7] ? data[r+7][c+3] : "";
                    
                    if (!dates || String(dates).trim() === '' || dates === 'TBC') dates = "To be announced";
                    if (!duration || String(duration).trim() === '' || duration === 'TBC') duration = "To be announced";
                    if (!spots || String(spots).trim() === '' || spots === "TBC" || isNaN(parseInt(spots))) spots = "To be announced";
                    else spots = parseInt(spots);

                    if (dates === "To be announced" && data[r+3] && data[r+3][c+4] && String(data[r+3][c+4]).length > 3 && String(data[r+3][c+4]) !== ':') {
                        dates = data[r+3][c+4];
                    }
                    if (duration === "To be announced" && data[r+4] && data[r+4][c+4] && String(data[r+4][c+4]).length > 3 && String(data[r+4][c+4]) !== ':') {
                        duration = data[r+4][c+4];
                    }

                    if (!countriesMap[countryName]) {
                        countriesMap[countryName] = {
                            country: countryName,
                            city: "To be announced",
                            fields: new Set(),
                            dates: dates,
                            duration: duration,
                            spots: spots,
                            status: spots === "To be announced" || spots === 0 ? "Coming Soon" : "Open",
                            note: reqs ? String(reqs).trim().replace(/\n/g, ' ') : "To be announced"
                        };
                    } else {
                        if (countriesMap[countryName].dates === "To be announced" && dates !== "To be announced") {
                            countriesMap[countryName].dates = dates;
                        }
                        if (countriesMap[countryName].duration === "To be announced" && duration !== "To be announced") {
                            countriesMap[countryName].duration = duration;
                        }
                        if (countriesMap[countryName].spots === "To be announced" && spots !== "To be announced") {
                            countriesMap[countryName].spots = spots;
                            countriesMap[countryName].status = "Open";
                        }
                        if (countriesMap[countryName].note === "To be announced" && reqs) {
                            countriesMap[countryName].note = String(reqs).trim().replace(/\n/g, ' ');
                        }
                    }
                    countriesMap[countryName].fields.add(field);
                }
            }
        }
    }
});

const countriesArray = Object.values(countriesMap).map(c => ({
    ...c,
    fields: Array.from(c.fields)
}));

fs.writeFileSync('scratch/countries.json', JSON.stringify(countriesArray, null, 2));
console.log("Countries extracted:", countriesArray.length);
