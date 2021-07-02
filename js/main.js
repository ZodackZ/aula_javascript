function clicado(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //alert ("Obrigado por clicar")
}

function novajanela(){
    window.open("https://www.minecraft.net/pt-br")
}

function trocar(){
    document.getElementById("passoumouse").innerHTML = "Hi boy";
//alert("HAHAHAHA")

}

function voltar(){
    document.getElementById("passoumouse").innerHTML = "Passe o mouse";
}

function funchange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}

alert (soma(5, 5));
*/
/*
var nome = "Eduardo";
var n1 = 19;
var n2 = 10;
var frase= "Eu sou do Brasil"
var lista= ["maçã", "pera", "uva"]
var fruta= {nome: "uva", cor: "roxo"}
*/
/*
var idade = prompt("Qual a sua idade?") //LER INFOMAÇÃO
//var idade= 18;
if (idade >= 18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
};
*/

/*
var d = new Date();         //DATA
alert (d.getDay());
alert (d.getHours());
alert (d.getMinutes());
alert (d);
*/

/*
var count = 0;      
while (count <= 5){         //REPETIÇÃO
    console.log (count);
    count = count ++; 
}
*/

//lista.push("banana");
//lista.pop();

//alert(nome + " tem " + idade + " anos");
//console.log (nome)
//console.log (n1 + n2)
//console.log (frase.replace("Brasil", "Japão"))

//alert (frase.replace("Brasil", "Japão"));

//alert (frase.toLocaleUpperCase());
//console.log (lista)
//console.log (fruta)
//console.log(lista.length)
//console.log(lista.reverse())
//console.log(lista.toString())
//console.log(lista.join(" - "))