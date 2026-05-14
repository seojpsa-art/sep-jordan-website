const xlsx = require('xlsx');
const fs = require('fs');

const file = 'data/sep_placements.xlsx.xlsx';
const workbook = xlsx.readFile(file);

const allData = {};

workbook.SheetNames.forEach(sheetName => {
    if (sheetName.toLowerCase().includes('main')) return;
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet, {header: 1});
    allData[sheetName] = data.slice(0, 15); // Print first 15 rows
});

console.log(JSON.stringify(allData, null, 2));
