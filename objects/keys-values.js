const obj = {
    apfel: 10,
    banane: 30,
    kiwi: 20
}

// Alle Schlüssel (keys) eines Objektes als Array

Object.keys(obj) // ['apfel', 'banane', 'kiwi']

// Alle Werte (values) eines Objektes als Array

Object.values(obj) // [10, 30, 20]

// Über ein Objekt iterieren (entlanglaufen)

for (key of Object.keys(obj)) {
    console.log(key, obj[key])
}

// Bonus: Schlüssel UND Werte (entries)

Object.entries(obj) // [ [ 'apfel', 10 ], [ 'banane', 20 ], [ 'kiwi', 30 ] ]