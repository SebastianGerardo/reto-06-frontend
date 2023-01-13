let valorA;
let valorB;
let resultadoFinal;

function reset () {
  resultado.textContent = "";
  valorA = 0;
  valorB = 0;
  resultadoFinal = "";
}

function indent(value) {
  // Vamos a capturar los elementos

  const resultado = document.getElementById("resultado");
  const suma = document.getElementById("suma");
  const resta = document.getElementById("resta");
  const multiplicacion = document.getElementById("multiplicacion");
  const division = document.getElementById("division");
  const igual = document.getElementById("igual");

  //

  resultado.textContent += value;

  suma.onclick = function (e) {
    valorA = resultado.textContent;
    resultadoFinal = "+";
    clean();
  };

  resta.onclick = function (e) {
    valorA = resultado.textContent;
    resultadoFinal = "-";
    clean();
  };

  multiplicacion.onclick = function (e) {
    valorA = resultado.textContent;
    resultadoFinal = "*";
    clean();
  };

  division.onclick = function (e) {
    valorA = resultado.textContent;
    resultadoFinal = "/";
    clean();
  };

  igual.onclick = function (e) {
    valorB = resultado.textContent;
    solve();
  };

  function clean () {
    resultado.textContent = "";
  }

  function solve () {
    let res = 0;
    switch (resultadoFinal) {
      case "+":
        res = parseFloat(valorA) + parseFloat(valorB);
        break;
      case "-":
        res = parseFloat(valorA) - parseFloat(valorB);
        break;
      case "*":
        res = parseFloat(valorA) * parseFloat(valorB);
        break;
      case "/":
        res = parseFloat(valorA) / parseFloat(valorB);
        break;  
    }
    reset();
    resultado.textContent = res;
  }
}
