
let magstDuEiscreme = true

console.log(
    (
        function () {
            if (magstDuEiscreme) {
                return 'Ja'
            }
            else {
                return 'Nein'
            }
        }
    )()
)


function antwort (magstDu) {
    if (magstDu) { return 'Ja' }
    else { return 'Nein' }
}
console.log(antwort(magstDuEiscreme))


let x;
if (magstDuEiscreme) { x = 'Ja' }
else { x = 'Nein' }
console.log(x)


console.log(magstDuEiscreme ? 'Ja' : 'Nein')