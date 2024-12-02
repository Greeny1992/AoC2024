import * as fs from "fs";
const data = fs.readFileSync("./input.txt", "utf8");

const dataArr = data
  .split("\n")
  .map((x) => x.split(" ").map((y) => parseInt(y)));

const posLeastStep = 1;
const posMaxStep = 3;
const negLeastStep = -1;
const negMaxStep = -3;

let safeCount = 0;
for (let i = 0; i < dataArr.length; i++) {
  let dec;
  for (let j = 0; j < dataArr[i].length - 1; j++) {
    if (dec === undefined) {
      if (dataArr[i][j + 1] > dataArr[i][j]) {
        dec = false;
      } else {
        dec = true;
      }
    }

    if (
      (!dec &&
        !(
          dataArr[i][j + 1] - dataArr[i][j] >= posLeastStep &&
          dataArr[i][j + 1] - dataArr[i][j] <= posMaxStep
        )) ||
      (dec &&
        !(
          dataArr[i][j + 1] - dataArr[i][j] >= negMaxStep &&
          dataArr[i][j + 1] - dataArr[i][j] <= negLeastStep
        ))
    ) {
      if (
        (!dec &&
          !(
            dataArr[i][j + 2] - dataArr[i][j] >= posLeastStep &&
            dataArr[i][j + 2] - dataArr[i][j] <= posMaxStep
          )) ||
        (dec &&
          !(
            dataArr[i][j + 2] - dataArr[i][j] >= negMaxStep &&
            dataArr[i][j + 2] - dataArr[i][j] <= negLeastStep
          ))
      )
        break;
    }
    if (j === dataArr[i].length - 2) safeCount++;
  }
}

console.log(safeCount);
