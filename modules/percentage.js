function modulo(first, second) {
    return first % second;
}

function percentage(first, second) {
    return (first * second) / 100;
}

function percentageOf(first, second) {
    return (first * 100) / second;
}

function difference(first, second ) {
    let calc = second - first;
    return (calc * 100) / first 
}


// Export the functions as part of an object which can be destructured
export {
  modulo,
  percentage,
  percentageOf,
  difference
}
 
