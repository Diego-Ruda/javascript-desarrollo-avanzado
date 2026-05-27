import { captureOwnerStack } from 'react';
import './style.css'

console.log('//! Formas de mostrar informacion en la consola');

console.log('// Mensaje informativo');
console.warn('// ! Mensaje de advertencia');
console.error('// ! Mensaje de error');

console.warn('// ! hacer comentarios');

// Un comentario en linea

/*
Un
comentario
multilinea
*/

// Extension Better commets

/*
!Esto es un comentario un rojo
? Esto es un comentario en azul
TODO esto es un comentario en naranja
*Esto es un comentario en verde
*/

console.warn('// ! concatenacion');

// ! concatenacion tradicional

const nombre = 'Diego'
const mensaje = 'Hola, ' + nombre + ' bienvenido!'
console.log(mensaje);

// concatenacion con tempalte string (Templates literales)

const otroMensaje = `Hola, ${nombre} bienvenido!`
console.log(otroMensaje);

console.log('// ! Variable tipos primitivos');

// * String - cadenas de caracteres
// * number - enteros y los decimales
// * bollean - verdadero y falso
// * undefined - variable sin dato aun

let x // creo una variable y no le asigno nada
console.log(x) // undefined
console.log(typeof x); // undefined


// ---------------------------------------

console.log('// ! Variables tipoobjecto');

// * objecto (representa datos mas complejos, son datos agrupados)
// * arrays (arreglos) ( es una estructura de datos indexada)
// * null

let usuario = null; // explicitamente esta vacio
console.log(typeof usuario); // object

// * undefined -> todavia no tiene valor
// * null -> explicitamente vacio

//---------------------------------------------------------

console.warn('Tipo de dato Symbol');
// Existen para resolver un problema concreto. colisiones de nombres y propiedades ocultas

const a = Symbol()
const b = Symbol()

console.log(a)
console.log(typeof a)

console.log(a === b) // false

console.warn('// ! Evitar colosiones');

const cliente = {
  nombre: 'Maxi'
}
cliente.id = 123;

console.log(cliente);

const ID = Symbol('id') // Nadie mas puede pisar esta propiedad. No hay riesgo de colision. Es unico

cliente[ID] = 123

console.log(cliente);

// Otro ejemplo para entender lo de evitar colisiones

const id = 'id'
const s1 = Symbol(id)
const s2 = Symbol(id)

console.log(s1 === s2) // false

// Mismo texto
// Mismo 'id'
// distinto Symbols

// ¿por que cada llamada a Symbbol() crea una nueva identidad, irrepetible, garantizada por el motor Javascript

console.warn('// !  Propiedades ocultas');

// cuando recorra el objecto no las voy a ver

// for...in
//JSON.stringfy()
//Object.keys()

const secreto = Symbol('secreto')

const obj = {
  nombre:'Diego',
  [secreto]: 'dato interno'
}

for(const clave in obj){
  console.log(clave) /*solo veo nombre */

}

console.log(Object.keys(obj)) // ['nombre']

console.warn('// ! Ver propiedad ocultas');

const simbolo = Object.getOwnPropertySymbols(obj)
console.log(simbolo.length > 0) // true
console.log(simbolo);

console.log('// ! Me muestra los claves ocultas y el resto')

console.log(Reflect.ownKeys(obj))

console.log('// ! bigint -> numeros grandes')

const numeroGrande = 99734892369489273489n

console.log(numeroGrande)

console.log(typeof numeroGrande) // bigint

/*
constructor     | var     | let     | const
alcance(scope)  | global  | local   | local
redeclarable    | si      | no      |  no
redefinible     | si      | si      |  no
*/


console.warn('// ! ALcance (scope')
const m = 2
console.log(m)
if( true){
  console.log(m)
  // console.log(n) // No existe en este ambito
  if(true){
    console.log(m)
    if(true){
      console.log(m) 
      const n = 5
      console.log(n) // Solo aca existe n
    }
  }
}

// console.log(n) // no puedo acceder porque en este scope no existe n

// ! si es redeclarable
data = 'Milena'
console.log(data)
var data = 'Pedro'
console.log(data)
var data = 'Andres'
console.log(data)


// ! No es redeclarable
// let dato = 'Pedro'
// let dato = 'Juan'

// metodos nativos de los objectos

const producto = {
  nombre: 'Notebook gamer',
  categoria: 'Computacion',
  disponibilidad: true,
  stock: 20,
  precio: 899.99
}

console.warn('// ! Object.keys()')
console.log(Object.keys(producto))
console.warn('//! Object.values()')
console.log(Object.values(producto))
console.warn('//! Object.entries()')
console.log(Object.entries(producto))

// Matriz

const matriz = [
  [2,5],
  [8,3]
]

const datos = [
  ['Luis', 50, 'acuario'], // persona 1
  ['Pedro', 33, 'geminis'] // persona 2
]

console.log(matriz)
console.log(datos)

console.warn('// ! .hasOwnProperty()')
console.log(producto.hasOwnProperty('nombre'))
console.log(producto.hasOwnProperty('apellido'))

for (const key in producto) {
  
  if (!Object.hasOwn(producto, key)) continue;
  
  const element = producto[key];
  console.log(element)
  
}