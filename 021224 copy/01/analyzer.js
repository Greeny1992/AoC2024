"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync("./input.txt", "utf8");
console.log(data);
var calculationData = data.trim().matchAll(/mul\(\d{1,3},\d{1,3}\)/g);
console.log(Array.from(calculationData, function (m) { return m[0]; }));
