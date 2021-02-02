/**
 * Author:    Cole Hennig, Olivia Hamilton
 * Created:   01.27.2020
 *
 * (c) Copyright by Blub Corp.
 **/

var currentYear = new Date().getFullYear();

var makeC = "Dodge";
var modelC = "Durango";
var colorC = "Silver";
var yearC = "2001";
var ownItC = true;

var makeO = "Land Rover";
var modelO =  "LR4";
var colorO = "Black";
var yearO = "2010"
var ownItO = false;

document.write("Cole's car make: " + makeC + "<br>");
document.write("Cole's car model: " + modelC + "<br>");
document.write("Cole's car color: " + colorC + "<br>");
document.write("Cole's car year: " + yearC + "<br>");
document.write("Cole's car age: " + (currentYear - yearC) + "<br>");
document.write("Does Cole own it?: ");
if (ownItC) {
  document.write("Yes<br>");
} else {
  document.write("No<br>");
}

document.write("Olivia's car make: " + makeO + "<br>");
document.write("Olivia's car model: " + modelO + "<br>");
document.write("Olivia's car color: " + colorO + "<br>");
document.write("Olivia's car year: " + yearO + "<br>");
document.write("Olivia's car age: " + (currentYear - yearO) + "<br>");
document.write("Does Olivia own it?: ");
if (ownItO) {
  document.write("Yes<br>");
} else {
  document.write("Nope<br>");
}
