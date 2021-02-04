/**
 * Author:    Cole Hennig, Olivia Hamilton
 * Created:   02.04.2020
 *
 * (c) Copyright by Blub Corp.
 **/

function sort_name() {
  var person = window.prompt("Please enter your name");
  var ssn = window.prompt("and then just your social security please sir:");
  var nameArray = person.split('');
  var sorted = nameArray.sort();
  var name = nameArray.join('');
  return name;
}

document.write("With your social security number we have stolen your identity, this is your name: ", sort_name(), "<br>");
