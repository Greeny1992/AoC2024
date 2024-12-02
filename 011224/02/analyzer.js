"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync("./input.txt", "utf8");
var leftList = data
    .split("\n")
    .map(function (y) { return parseInt(y.split("   ")[0]); })
    .sort(function (a, b) { return a - b; });
var rightList = data
    .split("\n")
    .map(function (y) { return parseInt(y.split("   ")[1]); })
    .sort(function (a, b) { return a - b; });
var similarityScore = 0;
var _loop_1 = function (i) {
    similarityScore +=
        leftList[i] * rightList.filter(function (x) { return x === leftList[i]; }).length;
};
for (var i = 0; i < leftList.length; i++) {
    _loop_1(i);
}
console.log(similarityScore);
