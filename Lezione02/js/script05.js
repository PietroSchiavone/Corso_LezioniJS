//estrai 6 numeri senza far avvenire la ripetizione dei numeri estratti
let tot = 90; //totale di numeri estraibili
let estrazioni = 6; //quante estrazioni eseguire
let setNumeri = []
let numeriEstratti = []

for (let i = 0; i < tot; i++) {
    setNumeri.push(i);    
}

//console.log(numeri);

for (let i = 0; i < estrazioni; i++) {
    let numeroEstratto = Math.ceil(Math.random() * setNumeri.length);
    numeriEstratti.push(setNumeri[numeroEstratto]);
    setNumeri.splice(numeroEstratto, 1);
}

numeriEstratti.sort();
console.log("i numeri estratti sono: " + numeriEstratti);





let numeri = [];

for (let i = 0; i < 6; i++) {
    let numeroCasuale = Math.ceil(Math.random() * 90);
    if (numeri.includes(numeroCasuale)) {
        i--;
    } else {
       numeri.push(numeroCasuale) 
    }
}

console.log(numeri)