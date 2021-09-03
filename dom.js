//////////////////////////---------------------- WEB APIs ---------------------/////////////////////////
// Lo que esta en el index es parte de la clase

console.log("hola");

// let texto = "Hola como estan amiguitos de iutuve hoy le traigo un nuevo vidio";
// let texto2 = "que estara haciendo la gatit";
// 
// let hablar = (valor)=>{
//     speechSynthesis.speak(new SpeechSynthesisUtterance(valor));
// };
// 
// hablar(texto2);


////////////////////////////-------------- DOM - Introducción --------------////////////////////////////

console.log(window);
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

setTimeout(()=>{
    console.log(document.getSelection().toString());
},3000);

document.write("<h2>Hola mundo desde el DOM</h2>")
document.write("hola")

//////////////////////------------ DOM: Nodos, Elementos y Selectores ---------------////////////////////

// Estos se estan dejando de usar
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));

// Estos son los mas usados
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach(el=>console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));

///////////////////------------------ DOM: Atributos y Data-Attributes ------------------////////////////

