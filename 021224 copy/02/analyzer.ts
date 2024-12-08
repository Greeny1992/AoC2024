import * as fs from "fs";
const data = fs.readFileSync("./input.txt", "utf8");

const dataArr = data
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

function isValidSequence(seq: number[]): boolean {
  const dec = seq[1] - seq[0] < 0;

  for (let i = 1; i < seq.length; i++) {
    const step = seq[i] - seq[i - 1];
    if ((!dec && (step < 1 || step > 3)) || (dec && (step > -1 || step < -3))) {
      return false;
    }
  }
  return true;
}

function canBecomeValid(seq: number[]): boolean {
  for (let i = 0; i < seq.length; i++) {
    const modifiedSeq = seq.slice(0, i).concat(seq.slice(i + 1));
    if (isValidSequence(modifiedSeq)) {
      return true;
    }
  }
  return false;
}

// Count safe sequences
let safeCount = 0;

for (const report of dataArr) {
  if (isValidSequence(report) || canBecomeValid(report)) {
    safeCount++;
  }
}

console.log(safeCount);
