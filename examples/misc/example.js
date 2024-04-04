function nameDerFunktion (arg1, arg2, argN) {
	// Funktionskörper
	// Function body
	console.log(arg1)

	return 'Mein Ergebnis'
	// kein return: undefined
}

function f1 () {
	console.log('Hallo Welt');
}

function f2 () {
	return 'Hallo Welt'
}

const f2_2 = () => 'Hallo Welt'

function f5 (andereFunktion) {
	return andereFunktion()
}

console.log(f5(f2))
console.log(f5(f2_2))

function countdown (start) {
	if (start == 0) return 'Fertig'

	console.log(start)
	countdown(start - 1)
}

const countdown2 = (start) => {
	if (start == 0) return 'Fertig'

	console.log(start)
	countdown2(start - 1)
}

function fahrenheit (celsius) {
	return 1.8 * celsius + 32
}

const fahrenheit2 = (celsius) => {
	return 1.8 * celsius + 32
}

const fahrenheit3 = (celsius) => 1.8 * celsius + 32

let temp_c = 20
let temp_f = fahrenheit(temp_c)

console.log(`${temp_c} Grad Celsius sind ${temp_f} Grad Fahrenheit`)
console.log(temp_c, 'Grad Celsius sind', temp_f, 'Grad Fahrenheit')