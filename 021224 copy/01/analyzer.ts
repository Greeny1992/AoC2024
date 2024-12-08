import * as fs from "fs";
const data = fs.readFileSync("./input.txt", "utf8");
console.log(data);
const calculationData = data.trim().matchAll(/mul\(\d{1,3},\d{1,3}\)/g);

console.log(Array.from(calculationData, (m) => m[0]));
