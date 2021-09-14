//////////////////////////---------------------- WEB APIs ---------------------/////////////////////////
// Lo que esta en el index es parte de la clase

// let texto = "Hola como estan amiguitos de iutuve hoy le traigo un nuevo vidio";
// let texto2 = "que estara haciendo la gatit";
// 
// let hablar = (valor)=>{
//     speechSynthesis.speak(new SpeechSynthesisUtterance(valor));
// };
// 
// hablar(texto2);


////////////////////////////-------------- DOM - Introducción --------------////////////////////////////
/*
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
*/
//////////////////////------------ DOM: Nodos, Elementos y Selectores ---------------////////////////////
/*
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
*/
///////////////////------------------ DOM: Atributos y Data-Attributes ------------------////////////////
/*
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));
document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-AR");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM);
$linkDOM.setAttribute("target", "_blank");
// Con esto es establece que no hay dependencia entre la ventana que se esta abriendo y la de origen.
// Buena practica
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://www.youtube.com/");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

// Data-Attributes

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.id);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento")
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Hola, el valor fue cambiado otra vez";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id"));
*/
////////////////////------------------- DOM: Estilos y Variables CSS ------------------///////////////////

/*
const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
// lower camel case
$linkDOM.style.width = "50%";
$linkDOM.style.textAling = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

// Variables CSS - Custom Properties CSS

const $html = document.documentElement, $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"), 
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

// Cambia el valor de "--dark-color"
$html.style.setProperty("--dark-color", "#000");
// Coloca el nuevo valor a la variable que lo contiene
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
// Aplica el nuevo valor al "background-color"
$body.style.setProperty("background-color", varDarkColor);
*/

///////////////////////////----------------- DOM: Clases CSS ----------------///////////////////////////
/*
const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");
*/
////////////////////////--------------------- DOM: Texto y HTML --------------------//////////////////////
/*
const $whatIsDOM = document.getElementById("que-es");

let text = `
<p> 
El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es una api para
documentos HTML y XML.
</P>
<p> 
Este proveé una representación estructural del documento, permitiendo modificar su contenido y 
presentación visual mediante código JavaScript.
</P>
<p>
<mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</P>
`;

$whatIsDOM.innerText = text;
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text;
*/

///////////////////---------------- DOM Traversing: Recorriendo el DOM -----------------//////////////////
/*
const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest('div'));
console.log($cards.closest('body'));
console.log($cards.children[1].closest('section'));
*/

//////////////////--------------- DOM: Creando Elementos y Fragmentos ---------------///////////////////




