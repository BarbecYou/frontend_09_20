document.addEventListener("DOMContentLoaded", init);

function init() {
    document.getElementById("submitButton").addEventListener("click", szamolas);
}

function szamolas() {
    console.log("alma");
    let magassag = parseFloat(document.getElementById("magassag").value);
    let testsuly = parseFloat(document.getElementById("testsuly").value);

    let bmi = parseFloat(testsuly / (magassag / 100) ** 2).toFixed(2);
    let bmiErtek = `AZ ÖN BMI ÉRTÉKE: ${bmi}`;

    document.getElementById("felhasznaloErtek").innerHTML = bmiErtek;

    let active = document.getElementsByClassName("activeRow");
    if (active.length > 0){
        active[0].className -= "activeRow";
    }

    const x = bmi;
    switch (true) {
        case (x <= 18.5):
            document.getElementById("sovany").className += " activeRow";
            break;
        case (x > 18.5 && x <= 24.9):
            document.getElementById("normal").className += " activeRow";
            break;
        case (x >= 25 && x <= 29.9):
            document.getElementById("tulsuly").className += " activeRow";
            break;
        case (x >= 30 && x <= 34.9):
            document.getElementById("elsoFoku").className += " activeRow";
            break;
        case (x >= 35 && x <= 39.9):
            document.getElementById("masodFoku").className += " activeRow";
            break;
        case (x >= 40):
            document.getElementById("harmadFoku").className += " activeRow";
            break;
    }
    // let idealisTomeg = ;
    // document.getElementById("idealisTomegText").textContent = ;
}