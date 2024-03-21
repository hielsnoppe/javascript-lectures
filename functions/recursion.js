/*
 * Eine rekursive Funktion ist eine Funktion, die sich selbst aufruft.

 * Damit es keinen endlosen Kreis aus rekursiven Aufrufen gibt, benötigen
 * rekursive Funktionen einen Rekursions-Anker.
 * Der Rekursions-Anker bestimmt, unter welcher Bedingung die Funktion "fertig"
 * ist und kein weiterer rekursiver Aufruf erfolgt.
 */
function countdown (start) {
    // Rekursions-Anker
    if ( start <= 0 ) { return }

    // Die eigentliche Funktion
    console.log(start)

    // Rekursiver Aufruf
    countdown(start - 1)
}

countdown(5)