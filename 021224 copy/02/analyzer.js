"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync("./input.txt", "utf8");
var dataArr = data
    .trim()
    .split("\n")
    .map(function (line) { return line.split(" ").map(Number); });
function isValidSequence(seq) {
    var dec = seq[1] - seq[0] < 0;
    for (var i = 1; i < seq.length; i++) {
        var step = seq[i] - seq[i - 1];
        if ((!dec && (step < 1 || step > 3)) || (dec && (step > -1 || step < -3))) {
            return false;
        }
    }
    return true;
}
function canBecomeValid(seq) {
    for (var i = 0; i < seq.length; i++) {
        var modifiedSeq = seq.slice(0, i).concat(seq.slice(i + 1));
        if (isValidSequence(modifiedSeq)) {
            return true;
        }
    }
    return false;
}
// Count safe sequences
var safeCount = 0;
for (var _i = 0, dataArr_1 = dataArr; _i < dataArr_1.length; _i++) {
    var report = dataArr_1[_i];
    if (isValidSequence(report) || canBecomeValid(report)) {
        safeCount++;
    }
}
console.log(safeCount);
