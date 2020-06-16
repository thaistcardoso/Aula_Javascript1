function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
    //console.log(document.getElementById);
    //alert("obrigado por clicar!");
}

function redirecionar() {
    window.open("https://www.google.com")
        // window.location.href = "https://google.com"
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse!";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    //alert("Trocar texto")
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui...";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui...";
}

function load() {
    alert("Página carregada!");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}


/*function soma(n1, n2) {
    return n1 + n2;
}
var validar = 0;

function validaIdade(idade) {
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
        alert("menor de idade!");
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
validaIdade(idade)
console.log(validar);
*/

/*function SetReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(SetReplace("vai Japão", "Japão", "Brasil"));
*/
/*
var d = new Date();
var d2 = new Date();
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay());
*/

/* para
var count;
for(count=0; count <=10; count++){
    console.log(count);
};
*/

/* enquanto
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
    //count = count + 1;
};*/

/* Se, senao
var idade = prompt("Qual a sua idade?");
var idade = 18;
if (idade>=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};*/

/* array
var frutas = [{nome:"maça" ,cor:"vermelho"}, {nome:"uva", cor:"roxo"}];
console.log(frutas);
console.log(frutas[1].nome);*/

//var lista = ["maça", "pêra","Laranja", "Uva"];
//lista.push("manga");
//lista.pop("uva");
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "))

//aula 1
//var nome = "Thais Cardoso";
//var n1 = 3;
//var n2 = 8;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos!") ;
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));