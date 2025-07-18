const fs = require('fs');

const filePath = 'tdmrep.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const today = new Date().toISOString().split('T')[0];
data.datePublication = today;

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log(`Date mise à jour : ${today}`);
