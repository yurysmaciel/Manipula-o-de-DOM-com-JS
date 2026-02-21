console.log("Olá");

const title = document.getElementById("titulo");

title.textContent = "Texto alterado via JS";

const paragrafo = document.getElementById("paragrafo1");
paragrafo.textContent =
  "Esse é o meu primeiro paragrafo feito com JS manipulando o DOM!!!";

const text = document.getElementById("paragrafo1");
text.textContent = "Esse é o meu texto do paragrafo";
text.className = "text-blue";
text.style.color = "pink";
text.style.backgroundColor = "red";

const btn = document.getElementById("btn");
btn.style.margin = "8px";
btn.style.color = "white";
btn.style.backgroundColor = "green";
btn.style.padding = "12px";
btn.style.border = "solid 2px black";
btn.style.borderRadius = "12px";
btn.style.cursor = "pointer";

const btn2 = document.getElementById("btn2");
btn2.className = "btn-alternativo";

//eventos
//
btn.onclick = function () {
  console.log("Clicando no botão");
};
//Outra forma
/*btn.onclick = cliqueBotão;

function cliqueBotão() {
    text.textContent = "você clicou no botão" //Aqui pode ser passado qualquer codigo!
}*/

btn2.onclick = function () {
  console.log("Clicando no outro botão");
};

const botoes1 = document.getElementById("botoes1");
botoes1.style.paddingTop = "8px";
botoes1.style.paddingBottom = "8px";
botoes1.style.paddingLeft = "1.5rem";
botoes1.style.paddingRight = "1.5rem";
botoes1.style.borderRadius = "10px";
botoes1.style.cursor = "pointer";
botoes1.style.border = "none";
botoes1.style.backgroundColor = "black";
botoes1.style.color = "white";

const botoes2 = document.getElementById("botoes2");
botoes2.style.paddingTop = "8px";
botoes2.style.paddingBottom = "8px";
botoes2.style.paddingLeft = "1.5rem";
botoes2.style.paddingRight = "1.5rem";
botoes2.style.borderRadius = "10px";
botoes2.style.cursor = "pointer";
botoes2.style.border = "none";
botoes2.style.backgroundColor = "black";
botoes2.style.color = "white";

const botoes3 = document.getElementById("botoes3");
botoes3.style.paddingTop = "8px";
botoes3.style.paddingBottom = "8px";
botoes3.style.paddingLeft = "1.5rem";
botoes3.style.paddingRight = "1.5rem";
botoes3.style.borderRadius = "10px";
botoes3.style.cursor = "pointer";
botoes3.style.border = "none";
botoes3.style.backgroundColor = "black";
botoes3.style.color = "white";

const botoesMais = document.getElementById("botoesMais");
botoesMais.style.paddingTop = "8px";
botoesMais.style.paddingBottom = "8px";
botoesMais.style.paddingLeft = "1.5rem";
botoesMais.style.paddingRight = "1.5rem";
botoesMais.style.borderRadius = "10px";
botoesMais.style.cursor = "pointer";
botoesMais.style.border = "none";
botoesMais.style.backgroundColor = "black";
botoesMais.style.color = "white";

/*botoes1.onclick = function () {
    console.log(botoes1.textContent)
}

botoes2.onclick = function () {
    console.log(botoes2.textContent)
}

botoes3.onclick = function () {
    console.log(botoes3.textContent)
}

botoesMais.onclick = function () {
    console.log(botoesMais.textContent)
}*/

//botoes1.addEventListener("click", () => {
//  console.log(botoes1.textContent);
//});

//botoes2.addEventListener("click", () => {
//  console.log(botoes2.textContent);
//});

//botoes3.addEventListener("click", () => {
//  console.log(botoes3.textContent);
//});

//botoesMais.addEventListener("click", () => {
//  console.log(botoesMais.textContent);
//});

const linha = document.getElementById("linha");
linha.style.backgroundColor = "red";

// h2 resultado tera que somar 2 numeros dos botoes que voce clicou!!
//lembrando que dentro do button o type é string e não number
let numeroSoma1 = 0;
let numeroSoma2 = 0;
let numeroSoma3 = 0;
let somaDos2numeros = document.getElementById("resultado");

botoes1.onclick = function () {
  numeroSoma1 = Number(botoes1.innerText);
  console.log(numeroSoma1);
};

botoes2.onclick = function () {
  numeroSoma2 = Number(botoes2.innerText);
  console.log(numeroSoma2);
};

botoes3.onclick = function () {
  numeroSoma3 = Number(botoes3.innerText);
  console.log(numeroSoma3);
};

botoesMais.addEventListener("click", () => {
  if (numeroSoma1 > 0 && numeroSoma2 > 0) {
    somaDos2numeros.textContent = `A Soma dos numeros é ${numeroSoma1 + numeroSoma2}`;
  } else if (numeroSoma2 > 0 && numeroSoma3 > 0) {
    somaDos2numeros.textContent = `A Soma dos numeros é ${numeroSoma3 + numeroSoma2}`;
  } else if (numeroSoma1 > 0 && numeroSoma3 > 0) {
    somaDos2numeros.textContent = `A Soma dos numeros é ${numeroSoma1 + numeroSoma3}`;
  }
});

//fazer tbm 2 input recebendo 1 numero cada e somando esses valores!
let botaoResultado = document.getElementById("button-Input");
let input1 = document.getElementById("inputNumero1");
let input2 = document.getElementById("inputNumero2");
let operadorUtilizado = document.getElementById("operador");
let mostrarResultado = document.getElementById("resultadoInput");

botaoResultado.addEventListener("click", () => {
  if (operadorUtilizado.value === "soma") {
    let valor1 = Number(input1.value);
    let valor2 = Number(input2.value);
    let somar = valor1 + valor2;

    return (mostrarResultado.textContent = `O resultado da ${operadorUtilizado.value} é ${somar}`);
  } else if (operadorUtilizado.value === "diminuição") {
    let valor1 = Number(input1.value);
    let valor2 = Number(input2.value);
    let diminuir = valor1 - valor2;

    return (mostrarResultado.textContent = `O resultado da ${operadorUtilizado.value} é ${diminuir}`);
  } else if (operadorUtilizado.value === "multiplicação") {
    let valor1 = Number(input1.value);
    let valor2 = Number(input2.value);
    let multi = valor1 * valor2;

    return (mostrarResultado.textContent = `O resultado da ${operadorUtilizado.value} é ${multi}`);
  } else if (operadorUtilizado.value === "divisão") {
    let valor1 = Number(input1.value);
    let valor2 = Number(input2.value);
    let divi = valor1 / valor2;

    return (mostrarResultado.textContent = `O resultado da ${operadorUtilizado.value} é ${divi}`);
  } else {
    mostrarResultado.textContent = "Operador incorreto";
  }
});
