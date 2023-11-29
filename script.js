function suportLinux(){
    alert("This game is supported on Linux")
}

var gamingDemo = document.querySelector("#gamingChange");
console.log(gamingDemo);

function gamingDemo1(){
    gamingDemo.src = "./images/stonepunk.png";
    console.log(gamingDemo.src);
}

function gamingDemo2(){
    gamingDemo.src = "./images/pixel-ninjas-2.png";
    console.log(gamingDemo.src);
}

var order = 0;

function selectOrder() {
    order ++;
    document.querySelector("#orderCount").innerHTML = order;
}

//Extra conversión de moneda
function changeMoney() {
    var selectMoney = document.getElementById("money").value;
    var money = document.getElementsByClassName("precio");

    for (var i = 0; i < money.length; i++) {
        var precioActual = parseFloat(money[i].innerText);

        if (selectMoney === "dolar") {
            money[i].innerText = convertirAEuro(precioActual).toFixed(2) + "$";
        } else if (selectMoney === "euro") {
            money[i].innerText = convertirADolar(precioActual).toFixed(2) + "€";
        }
    }
}
function convertirAEuro(dolar) {
    return (dolar * 1.09); 
}
function convertirADolar(euro) {
    return (euro * 0.91);
}
