/**
 * Author:    Cole Hennig, Olivia Hamilton
 * Created:   02.07.2020
 *
 * (c) Copyright by Blub Corp.
 **/
function firstThing(test) {
  console.log(test + ": This is the first thing.")
}

function secondThing(test) {
  console.log(test + ": This is the second thing.")
}

function thirdThing(test) {
  console.log(test + ": This is the third thing!")
}

firstThing ("TEST 1")
secondThing ("TEST 1")
thirdThing ("TEST 1")
//test 1- in order
setTimeout(function() {
  firstThing("TEST 2")
}, 0);
setTimeout(function() {
  secondThing("TEST 2")
}, 0);
setTimeout(function() {
  thirdThing("TEST 2")
}, 0);
// test 2 in order
setTimeout(function() {
  firstThing("TEST 3")
}, 3000);
setTimeout(function() {
  secondThing("TEST 3")
}, 1000);
setTimeout(function() {
  thirdThing("TEST 3")
}, 2000);
// test 3 in order
