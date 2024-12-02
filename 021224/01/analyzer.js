"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync("./input.txt", "utf8");
var dataArr = data
    .split("\n")
    .map(function (x) { return x.split(" ").map(function (y) { return parseInt(y); }); });
var posLeastStep = 1;
var posMaxStep = 3;
var negLeastStep = -1;
var negMaxStep = -3;
var safeCount = 0;
for (var i = 0; i < dataArr.length; i++) {
    var dec = void 0;
    for (var j = 0; j < dataArr[i].length - 1; j++) {
        if (dec === undefined) {
            if (dataArr[i][j + 1] > dataArr[i][j]) {
                dec = false;
            }
            else {
                dec = true;
            }
        }
        if ((!dec &&
            !(dataArr[i][j + 1] - dataArr[i][j] >= posLeastStep &&
                dataArr[i][j + 1] - dataArr[i][j] <= posMaxStep)) ||
            (dec &&
                !(dataArr[i][j + 1] - dataArr[i][j] >= negMaxStep &&
                    dataArr[i][j + 1] - dataArr[i][j] <= negLeastStep))) {
            break;
        }
        if (j === dataArr[i].length - 2)
            safeCount++;
    }
}
console.log(safeCount);
