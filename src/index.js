module.exports = function solveEquation(equation) {
  // your implementation
  let remakedEq = equation;

  while(remakedEq.indexOf(" ")+1) {
    remakedEq = remakedEq.replace(" ", "");
  }
  let result = [];
  let valueA = parseInt(remakedEq);
  let valueB = parseInt( remakedEq.slice(remakedEq.indexOf("x^2") + 3) );
  let ValueC = parseInt( remakedEq.slice(remakedEq.lastIndexOf('*x')+ 2) );

  let DescrimCalc = valueB*valueB - 4*valueA*ValueC;
  if (DescrimCalc == 0) {
    result.push(- valueB / 2 * valueA );
  } else {
    let sqrtD = Math.sqrt(DescrimCalc);
    result.push( Math.round((-valueB - sqrtD) / (2*valueA)) );
    result.push( Math.round((-valueB + sqrtD) / (2*valueA)) );
  }
   result = result.sort(function(a, b){
    return a - b;
  });

  return result;
}