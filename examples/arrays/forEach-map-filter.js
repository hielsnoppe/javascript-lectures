const vorher = [1, 2, 3, 4, 5]

// vorher.forEach((element, index) => {
//     console.log(`Index ${index}: ${element}`)
// })
/* Output:
Index 0: 1
Index 1: 2
Index 2: 3
Index 3: 4
Index 4: 5
*/

const nachher1 = vorher.map((element, index) => {
    return 2 * element
})

const nachher2 = vorher.filter((element, index) => {
    return element % 2 == 0
})

console.log(vorher)     // [ 1, 2, 3, 4, 5 ]
// console.log(nachher1)   // [ 2, 4, 6, 8, 10 ]
// console.log(nachher2)   // [ 2, 4 ]

// Verkettung von Array-Funktionen:

function double (value) {
    return value * 2
}
// Alternative Schreibweise mit Arrow-Function:
// const double = (value) => value * 2

function isEven (value) {
    return value % 2 == 0
}
// Alternative Schreibweise mit Arrow-Function:
// const isEven = (value) => value % 2 == 0

const nachher3 = vorher
    .filter(isEven)
    .map(double)

console.log(nachher3)

nachher3.forEach(console.log)