var niels = {
    name: 'Niels',
    jahrgang: 1991,
    farbe: 'Gelb'
}

var alter = (person, jahr) => {
    return jahr - person.jahrgang
}

alter(niels, 2024)

///// Beispiel 2

var niels = {
    name: 'Niels',
    jahrgang: 1991,
    farbe: 'Gelb',
    alter: function (jahr) {
        return jahr - this.jahrgang
    }
}

niels.alter(2024)


////// Beispiel 3

var niels = {
    name: 'Niels',
    jahrgang: 1991,
}
var tina = {
    name: 'Tina',
    jahrgang: 1985
}

function alter (jahr) {
    return jahr - this.jahrgang
}

niels.alter = alter
tina.alter = alter

niels.alter(2024)
tina.alter(2024)
alter(2024) // Funktioniert nicht wie erwartet!