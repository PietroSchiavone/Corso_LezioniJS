let demo = document.getElementById("demo");
let btnSum = document.getElementById("btnSum");
let btnSot = document.getElementById("btnSot");
let btnMolt = document.getElementById("btnMolt");
let btnDiv = document.getElementById("btnDiv");
let btnv = document.getElementById("btnDiv");
let risultato = 0;



// function somma(num1, num2) {
//     let somma = num1 + num2;
//     return somma;
// }

// function sottrazione(num1, num2) {
//     let sottrazione = num1 - num2;
//     return sottrazione;
// }

// function moltiplicazione(num1, num2) {
//     let moltiplicazione = num1 * num2;
//     return moltiplicazione;
// }

// function divisione(num1, num2) {
//     let divisione = num1 / num2;
//     return divisione;
//}


btnSum.addEventListener("click", function() {
    let num1 = document.getElementById("numero1").value;
    risultato += Number(num1);
    demo.innerHTML = risultato;
    document.getElementById("numero1").value = "";
    
})

btnSot.addEventListener("click", function() {
    let num1 = document.getElementById("numero1").value;
    risultato = risultato - Number(num1);
    demo.innerHTML = risultato;
    document.getElementById("numero1").value = "";
    
})

btnMolt.addEventListener("click", function() {
    let num1 = document.getElementById("numero1").value;
    risultato = risultato * Number(num1);
    demo.innerHTML = risultato;
    document.getElementById("numero1").value = "";
    
})

btnDiv.addEventListener("click", function() {
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;

    if(Number(num2) == 0 ){
        demo.innerHTML = "<p>Non puoi dividere per 0</p>";
    }else{
        risultato = risultato / Number(num1);
        demo.innerHTML = risultato;
        document.getElementById("numero1").value = "";
    }

    
})

btnCanc.addEventListener("click", function() {
    demo.innerHTML = "";
    document.getElementById("numero1").value = "";
    risultato = 0;
    
})

btnUguale.addEventListener("click", function() {
    demo.innerHTML = risultato;
    document.getElementById("numero1").value = "";
    
})