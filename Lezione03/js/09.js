let demo = document.getElementById("demo");
let btnSum = document.getElementById("btnSum");
let btnSot = document.getElementById("btnSot");
let btnMolt = document.getElementById("btnMolt");
let btnDiv = document.getElementById("btnDiv");
let btnv = document.getElementById("btnDiv");



function somma(num1, num2) {
    let somma = num1 + num2;
    return somma;
}

function sottrazione(num1, num2) {
    let sottrazione = num1 - num2;
    return sottrazione;
}

function moltiplicazione(num1, num2) {
    let moltiplicazione = num1 * num2;
    return moltiplicazione;
}

function divisione(num1, num2) {
    let divisione = num1 / num2;
    return divisione;
}


btnSum.addEventListener("click", function() {
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;

    if (num1.trim() == "" || num2.trim() == "") {
        demo.innerHTML = "<p>Devi inserire due numeri</p>";        
    }else {
        demo.innerHTML += "<p>La somma di " + num1 + " e " + num2 + " è " + somma(Number(num1), Number(num2)) + "</p>";
    }

    
})

btnSot.addEventListener("click", function() {
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;

    if (num1.trim() == "" || num2.trim() == "") {
        demo.innerHTML = "<p>Devi inserire due numeri</p>";        
    }else{
        demo.innerHTML += "<p>La diferenza tra " + num1 + " e " + num2 + " è " + sottrazione(Number(num1), Number(num2)) + "</p>";
    }

    
})

btnMolt.addEventListener("click", function() {
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;

    if (num1.trim() == "" || num2.trim() == "") {
        demo.innerHTML = "<p>Devi inserire due numeri</p>";        
    }else{
        demo.innerHTML += "<p>Il prodotto tra " + num1 + " e " + num2 + " è " + moltiplicazione(Number(num1), Number(num2)) + "</p>";
    }

    
})

btnDiv.addEventListener("click", function() {
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;

    if (num1.trim() == "" || num2.trim() == "") {
        demo.innerHTML = "<p>Devi inserire due numeri</p>";        
    }else if(Number(num2) == 0 ){
        demo.innerHTML += "<p>Il secondo numero non può essere uguale a 0</p>";
    }else{
        demo.innerHTML += "<p>" + num1 + " fratto " + num2 + " è uguale a " + divisione(Number(num1), Number(num2)) + "</p>";
    }

    
})

btnCanc.addEventListener("click", function() {
    demo.innerHTML = "";
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    
})