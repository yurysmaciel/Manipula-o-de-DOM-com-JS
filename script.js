console.log("Olá")

const title = document.getElementById("titulo");

title.textContent = "Texto alterado via JS";

const paragrafo = document.getElementById("paragrafo1");
paragrafo.textContent = "Esse é o meu primeiro paragrafo feito com JS manipulando o DOM!!!"

const text = document.getElementById("paragrafo1");
text.textContent = "Esse é o meu texto do paragrafo"
text.className = "text-blue"
text.style.color = "pink";
text.style.backgroundColor = "red";

const btn = document.getElementById("btn")
btn.style.margin = "8px"
btn.style.color = "white"
btn.style.backgroundColor = "green"
btn.style.padding = "12px";
btn.style.border = "solid 2px black";
btn.style.borderRadius = "12px"
btn.style.cursor = "pointer"

const btn2 = document.getElementById("btn2")
btn2.className = "btn-alternativo";

//eventos
//
btn.onclick = function () {
    console.log("Clicando no botão")
}
//Outra forma
/*btn.onclick = cliqueBotão;

function cliqueBotão() {
    text.textContent = "você clicou no botão" //Aqui pode ser passado qualquer codigo!
}*/

btn2.onclick = function () {
    console.log("Clicando no outro botão")
}

const botoes1 = document.getElementById("botoes1")
const botoes2 = document.getElementById("botoes2")
const botoes3 = document.getElementById("botoes3")
const botoesMais = document.getElementById("botoesMais")

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

botoes1.addEventListener("click", ()=>{
    console.log(botoes1.textContent)
})

botoes2.addEventListener("click", ()=>{
    console.log(botoes2.textContent)
})

botoes3.addEventListener("click", ()=>{
    console.log(botoes3.textContent)
})

botoesMais.addEventListener("click", ()=>{
    console.log(botoesMais.textContent)
})

// h2 resultado tera que somar 2 numeros dos botoes que voce clicou!!
//lembrando que dentro do button o type é string e não number

const numero1 = Number(botoes1)
console.log(typeof numero1)
//fazer tbm 2 input recebendo 1 numero cada e somando esses valores!
