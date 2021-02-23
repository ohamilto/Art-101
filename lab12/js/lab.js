/**
 * Author:    Cole Hennig, Olivia Hamilton
 * Created:   02.18.2020
 *
 * (c) Copyright by Blub Corp.
 **/
//Return Gryffindor, Ravenclae, Slytherim, and Hufflepuff
//depending on length mod 4

var houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
var insults = ["Ah, shut up, yeh great prune.",
              "Eat slugs.",
              "You deserve to be boiled in frog spawn.",
              "You're shit at Quidditch.",
              "Fuck off.",
              "You must be rather schtewpid.",
              "Honestly, if you were any slower, you'd be going backwards.",
              "If brains were gold, you'd be poorer than Weasley.",
              "You filthy mudblood."];
var compliments = ["I'd let you get a sip of my butter beer.",
                  "Be happy you aren't a Ravenclaw.",
                  "Thank you for not being Gryffindor.",
                  "You're just superior.",
                  "You are a beautiful wizard.",
                  "Welcome to the the better house."];

var bad;

function sortingHat(str) {
  if (str.length % 2 == 0) {
    bad = true;
  } else {
    bad = false;
  }
  return houses[str.length % 4];
}

var myButton = document.getElementById ("button");
myButton.addEventListener ("click", function(){
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  var newText = "<p>The sorting hat has sorted you into " + house + ".</p>";
  var statement;
  if (bad) {
    statement = insults[Math.floor(Math.random() * Math.floor(insults.length))];
  } else {
    statement = compliments[Math.floor(Math.random() * Math.floor(compliments.length))];
  }
  document.getElementById("output").innerHTML = newText + "<p>" + statement + "</p>";
});
