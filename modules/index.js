import {
  fixRoundingErrors,
  calculateAspectRatio
} from './aspect-ratio.js' // must provide file extension

import {
  modulo,
  percentage,
  percentageOf,
  difference
} from './percentage.js'



const navigationKeys = [
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Backspace",
  "Delete",
  // "Enter"
]

// Block non-numeric input, including decimal point, negative symbol
function filterForNumbers(event) {
  const key = event.key
  console.log("key:", key)

  if (navigationKeys.indexOf(key) < 0 && isNaN(key)) {
    event.preventDefault()
  }
}



// MODULO // MODULO // MODULO // MODULO // MODULO // MODULO //

const modulo1 = document.getElementById("modulo_1")
const modulo2 = document.getElementById("modulo_2")
const moduloResult = document.getElementById("modulo_result")


modulo1.addEventListener("keydown", filterForNumbers)
modulo2.addEventListener("keydown", filterForNumbers)
modulo1.addEventListener("keyup", showModuloResult)
modulo1.addEventListener("change", showModuloResult)
modulo2.addEventListener("keyup", showModuloResult)
modulo2.addEventListener("change", showModuloResult)
function showModuloResult() {
  const dividend = modulo1.value
  const modulus = modulo2.value
  const result = modulo(dividend, modulus)
  moduloResult.value = result
}



// PERCENTAGE // PERCENTAGE // PERCENTAGE // PERCENTAGE //

const percentage1 = document.getElementById("percentage_1")
const percentage2 = document.getElementById("percentage_2")
const percentageResult = document.getElementById("percentage_result")


percentage1.addEventListener("keydown", filterForNumbers)
percentage2.addEventListener("keydown", filterForNumbers)
percentage1.addEventListener("keyup", showPercentageResult)
percentage1.addEventListener("change", showPercentageResult)
percentage2.addEventListener("keyup", showPercentageResult)
percentage2.addEventListener("change", showPercentageResult)


function showPercentageResult() {
  const rawResult = percentage(percentage1.value, percentage2.value)
  const roundResult = fixRoundingErrors(rawResult)
  percentageResult.value = roundResult
}



// PERCENTAGE_OF // PERCENTAGE_OF // PERCENTAGE_OF // PERCENTAGE_OF //

const percentageOf1 = document.getElementById("percentageOf_1")
const percentageOf2 = document.getElementById("percentageOf_2")
const percentageOfResult = document.getElementById("percentageOf_result")


percentageOf1.addEventListener("keydown", filterForNumbers)
percentageOf2.addEventListener("keydown", filterForNumbers)
percentageOf1.addEventListener("keyup", showPercentageOfResult)
percentageOf1.addEventListener("change", showPercentageOfResult)
percentageOf2.addEventListener("keyup", showPercentageOfResult)
percentageOf2.addEventListener("change", showPercentageOfResult)


function showPercentageOfResult() {
  const rawResult = percentageOf(percentageOf1.value, percentageOf2.value)
  const roundResult = fixRoundingErrors(rawResult)
  percentageOfResult.value = roundResult
}



// DIFFERENCE // DIFFERENCE // DIFFERENCE // DIFFERENCE //

const difference1 = document.getElementById("difference_1")
const difference2 = document.getElementById("difference_2")
const differenceResult = document.getElementById("difference_result")


difference1.addEventListener("keydown", filterForNumbers)
difference2.addEventListener("keydown", filterForNumbers)
difference1.addEventListener("keyup", showDifferenceResult)
difference1.addEventListener("change", showDifferenceResult)
difference2.addEventListener("keyup", showDifferenceResult)
difference2.addEventListener("change", showDifferenceResult)


function showDifferenceResult() {
  const rawResult = difference(difference1.value, difference2.value)
  const roundResult = fixRoundingErrors(rawResult)
  differenceResult.value = roundResult
}



// ASPECT_RATIO // ASPECT_RATIO // ASPECT_RATIO // ASPECT_RATIO //

const ratio1 = document.getElementById("ratio_1")
const ratio2 = document.getElementById("ratio_2")
const ratio_result_width = document.getElementById("ratio_result-width")
const ratio_result_height = document.getElementById("ratio_result-height")


ratio1.addEventListener("keydown", filterForNumbers)
ratio2.addEventListener("keydown", filterForNumbers)
ratio_result_width.addEventListener("keydown", filterForNumbers)
ratio_result_height.addEventListener("keydown", filterForNumbers)
ratio1.addEventListener("keyup", showAspectRatioResult)
ratio1.addEventListener("change", showAspectRatioResult)
ratio2.addEventListener("keyup", showAspectRatioResult)
ratio2.addEventListener("change", showAspectRatioResult)
ratio_result_width.addEventListener("keyup", showAspectRatioResult)
ratio_result_width.addEventListener("change", showAspectRatioResult)
ratio_result_height.addEventListener("keyup", showAspectRatioResult)
ratio_result_height.addEventListener("change", showAspectRatioResult)


let newValue = 0
let valueType // not "h" (and not "v" either)
let targetElement = ratio_result_height

function showAspectRatioResult(event) {
  const targetId = event.target.id

  if (targetId === "ratio_result-width") {
    valueType = "v" // or any non "h" value
    newValue = ratio_result_width.value
    targetElement = ratio_result_height

  } else if (targetId === "ratio_result-height") {
    valueType = "h"
    newValue = ratio_result_height.value
    targetElement = ratio_result_width
  }

  const rawResult = calculateAspectRatio(
    ratio1.value,
    ratio2.value,
    newValue,
    valueType
  )
  const roundResult = fixRoundingErrors(rawResult)
  targetElement.value = roundResult
}