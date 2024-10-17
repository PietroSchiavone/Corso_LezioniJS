let btn = document.getElementById("btn");
let demo = document.getElementById("demo");

// function salutami() {
//     let saluto = "Ciao, Pietro"
//     demo.innerHTML += saluto;
// }

// btn.addEventListener("click", salutami)

function salutami() {
    let saluto = "Ciao, Pietro";
    return saluto;
}

btn.addEventListener("click", function() {
    demo.innerHTML = "<h1>" + salutami() + "</h1>";
})