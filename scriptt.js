// Zwykły if
function zwyklyIf() {
    let x = parseInt(document.getElementById("inputIf").value);
    if (x > 5) {
        document.getElementById("wynikIf").innerHTML = "x jest większe niż 5";
    } else {
        document.getElementById("wynikIf").innerHTML = "x nie jest większe niż 5";
    }
}

// if bez {} (przykład z jednym blokiem kodu)
function ifBezKlamer() {
    let x = parseInt(document.getElementById("inputIfBezKlamer").value);
    if (x > 5) document.getElementById("wynikIfBezKlamer").innerHTML = "x jest większe niż 5";
    else document.getElementById("wynikIfBezKlamer").innerHTML = "x nie jest większe niż 5";
}

// Operator warunkowy (ternary)
function ternaryOperator() {
    let x = parseInt(document.getElementById("inputTernary").value);
    document.getElementById("wynikTernary").innerHTML = (x > 5) ? "x jest większe niż 5" : "x jest mniejsze lub równe 5";
}

// Switch
function switchExample() {
    let day = parseInt(document.getElementById("inputSwitch").value);
    switch (day) {
        case 1:
            document.getElementById("wynikSwitch").innerHTML = "Poniedziałek";
            break;
        case 2:
            document.getElementById("wynikSwitch").innerHTML = "Wtorek";
            break;
        case 3:
            document.getElementById("wynikSwitch").innerHTML = "Środa";
            break;
        case 4:
            document.getElementById("wynikSwitch").innerHTML = "Czwartek";
            break;
        case 5:
            document.getElementById("wynikSwitch").innerHTML = "Piątek";
            break;
        case 6:
            document.getElementById("wynikSwitch").innerHTML = "Sobota";
            break;
        case 7:
            document.getElementById("wynikSwitch").innerHTML = "Niedziela";
            break;
        default:
            document.getElementById("wynikSwitch").innerHTML = "Nieprawidłowy dzień";
    }
}

// Pętla for
function forLoop() {
    let x = parseInt(document.getElementById("inputFor").value);
    let result = "";
    for (let i = 0; i < x; i++) {
        result += "Liczba: " + i + "<br>";
    }
    document.getElementById("wynikFor").innerHTML = result;
}

// Pętla while
function whileLoop() {
    let x = parseInt(document.getElementById("inputWhile").value);
    let i = 0;
    let result = "";
    while (i < x) {
        result += "Liczba: " + i + "<br>";
        i++;
    }
    document.getElementById("wynikWhile").innerHTML = result;
}

// Pętla do while
function doWhileLoop() {
    let x = parseInt(document.getElementById("inputDoWhile").value);
    let i = 0;
    let result = "";
    do {
        result += "Liczba: " + i + "<br>";
        i++;
    } while (i < x);
    document.getElementById("wynikDoWhile").innerHTML = result;
}
