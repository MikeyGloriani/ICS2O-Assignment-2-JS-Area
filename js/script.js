// Created by: Mikey Gloriani
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates area of a triangle
 */
function calculate() {
  // input
  const side = parseInt(document.getElementById("side-of-a-square").value)

  // process
  const area = side ^ 2

  // output
  document.getElementById("area").innerHTML = "Area is: " + area + " cm²"
}
