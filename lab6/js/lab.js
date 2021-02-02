/**
 * Author:    Cole Hennig, Olivia Hamilton
 * Created:   02.01.2020
 *
 * (c) Copyright by Blub Corp.
 **/


colesTrasport = ["walk", "run", "car", "bike", "skateboard"];
oliviasTransport = ["walk", "bus", "Uber", "ride from a friend"];
oliviasMainRide = {
  age: new Date().getFullYear() - 2010,
  make: "Land Rover",
  model: "LR4",
  color:"black",
  year: 2010
}

colesMainRide = {
  make: "Dodge",
  model: "Durango",
  color: "silver",
  year: 2001,
  age: new Date().getFullYear() - 2001
}

document.write("Cole's car is a ", (colesMainRide.model), " and Olivia's car is a ", (oliviasMainRide.model), ".<br>");
