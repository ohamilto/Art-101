/**
 * Author:    Cole Hennig, Olivia Hamilton
 * Created:   02.11.2020
 *
 * (c) Copyright by Blub Corp.
 **/

var outputEl = document.getElementById("callout");

var new1El = document.createElement("p");

new1El.innerHTML = "<p>We just changed the html attribute to say this</p>";

var new2El = document.createElement("div");

new2El.innerHTML = "<button>Unusable Button</button>";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

new1El.style.color="pink";
new2El.style.cursor="grab";
