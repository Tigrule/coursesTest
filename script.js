"use strict"

let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

console.dir(sortArray(findMatchesByCost(requiredRange1)));
console.dir(sortArray(findMatchesByCost(requiredRange2)));
console.dir(sortArray(findMatchesByCost(requiredRange3)));

/*Немного запутался в условии, но сделаю так. Пользователю подходит
любой курс, у которого есть любые пересечения с указанным диапазоном, то есть,
если он указывает от 100 до 300, то и курс от 50 до 400, и от 150 ему
подходят.
Два нула я отфильтровал как недоступный, хотя сначала подумал, что он
бесплатный*/
function findMatchesByCost(cash) {
  return courses.filter((el) => {
    if (el.prices[0] || el.prices[1]) {
      let minPrice = el.prices[0];
      let maxPrice = el.prices[1] ?? Infinity;
      let minCash = cash[0];
      let maxCash = cash[1] ?? Infinity;
      return minCash <= maxPrice && maxCash >= minPrice
    }
  })
}

function sortArray(array) {
  return array.sort((el1, el2) => { return el1.prices[0] - el2.prices[0] })
}
/*Если нужен код жестко в указанном диапазоне, тогда такой */
// function findMatchesByCost(cash) {
//   return courses.filter((el) => {
//     if (el.prices[0] || el.prices[1]) {
//       let minPrice = el.prices[0];
//       let maxPrice = el.prices[1] ?? Infinity;
//       let minCash = cash[0];
//       let maxCash = cash[1] ?? Infinity;
//       return minCash <= minPrice && maxCash >= maxPrice
//     }
//   })
// }