import * as fs from "fs";
const data = fs.readFileSync("./input.txt", "utf8");

const leftList = data
  .split("\n")
  .map((y) => parseInt(y.split("   ")[0]))
  .sort((a, b) => a - b);

const rightList = data
  .split("\n")
  .map((y) => parseInt(y.split("   ")[1]))
  .sort((a, b) => a - b);
let similarityScore = 0;
for (let i = 0; i < leftList.length; i++) {
  similarityScore +=
    leftList[i] * rightList.filter((x) => x === leftList[i]).length;
}

console.log(similarityScore);
