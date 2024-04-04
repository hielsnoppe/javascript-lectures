const list = [1, 2, 3]

// Zählende for-Schleife

for (let i = 0; i < list.length; i++) {
    console.log(i, list[i])
}

// for-in-Schleife läuft über den Index
// Merke: for-IN => INdex

for (const i in list) {
    console.log(i, list[i])
}

// for-of-Schleife läuft über die Einträge

for (const e of list) {
    console.log(e)
}

// Exkurs: for-of-Schleife mit Index UND Eintrag

for ([i, e] of list.entries()) {
    console.log(i, e)
}