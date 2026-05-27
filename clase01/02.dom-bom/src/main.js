import './style.css';


console.dir(document)
console.warn('// ! BOM - Browser Object Model')

console.log(window)

// ECAMAscript genrea los estandares para que Javascript se puede utilizar en todos los navegadores  y en el nackenmd de la misma manera

// https://ecma-international.org/

// Javascript no es ECMAScript -> Define el lenhuaje Javascript
// Que el navegador agregar (APIs) -> BOM -> Fetch, Geolocation , HTMLCollection

console.log(window.location.href)

const btnIr = document.getElementById('btn-ir')

console.log(btnIr)

btnIr.addEventListener('click', function() {
  window.location.href= 'https://google.com'
})


console.warn('// ! Seleccion de elementos en DOM')

console.warn('Tradicionales')

// * getElementById
// * getElementByClassName
// * getElementByTagName

console.warn('Modernos')

// * querySelector
// * querySelectorAll

// utilizo todos lo selectores que vengo utilizando en CSS con querySelector

// Si quiero seleccionar un ID
// Si quiero selecionar un CLASE
// Si quiero selecionar un TAG

// const tituloPrincipal = document.querySelector ('h1)
// const tituloPrincipal = document.querySelector('.text-2xl.text-green-600')
const tituloPrincipal = document.querySelector('#titulo-principal')

console.log(tituloPrincipal)