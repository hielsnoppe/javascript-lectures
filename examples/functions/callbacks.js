function wennFertig1 (ergebnis) {
	console.log(ergebnis)
}

function wennFertig2 (ergebnis) {
	console.log(`Das Ergebnis ist ${ergebnis}`)
}

function berechne (a, b, callback) {
	const erg = a + b
	callback(erg)
}

berechne(3, 5, wennFertig1)
berechne(3, 5, wennFertig2)

const unserCallback = () => { console.log('Hallo nocheinmal!') }

// setInterval(unserCallback, 1000)
setTimeout(unserCallback, 1000)

const text = 'Hallo Welt!'
setTimeout((arg) => console.log(text), 1000)

setTimeout(function () {
	console.log('Hallo Welt!')
}, 1000)

function buildAFunction () {
	return function () {
		console.log('Neue Funktion!')
	}
}