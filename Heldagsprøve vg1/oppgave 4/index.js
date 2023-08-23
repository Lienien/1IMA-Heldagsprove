const tekst = prompt("Skriv inn tekst", "Denne teksten er veldig bærekraftig og ødelegger ikke miljøet.");

if (tekst.includes("bærekraftig") && tekst.includes("ødelegger")) {
    document.write("Teksten inneholder ordet 'bærekraftig' og 'ødelegger'");
} else if (tekst.includes("bærekraftig")) {
    document.write("Teksten inneholder ordet bærekraftig")
} else if (tekst.includes("ødelegger")) {
    document.write("Teksten inneholder ordet 'ødelegger'");
} else {
    document.write("Teksten inneholder verken 'bærekraftig' eller 'ødelegger'");
}