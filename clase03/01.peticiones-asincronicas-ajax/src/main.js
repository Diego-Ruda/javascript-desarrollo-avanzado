import './style.css'


/* -------------------------------------------- */
console.warn('/* Comunicación asincrónica con AJAX */')
/* -------------------------------------------- */

/* --------------------------------------------------- */
/* Comunicación asincrónica con AJAX                   */
/* AJAX: Asyncronous JavaScript and XML                */
/* Un objeto llama XMLHttpRequest (Con eso trabajamos) */
/* --------------------------------------------------- */

// ----> 

// ! XML (Archivo de texto plano)
// * Nos permite transmitir información de manera estandar y liviana del backend al frontend por ejemplo

// https://es.wikipedia.org/wiki/Extensible_Markup_Language

// ! JSON (Archivo de texto plano)
// * JavaScript Object Notation
// * Nos permite transmitir información de manera estandar y liviano del backend al frontend por ejemplo

// https://es.wikipedia.org/wiki/JSON

// ! PROTOCOLO HTTP

// https://reparartuordenador.com/como-funciona-el-protocolo-http

// ! Métodos (verbos) HTTP

// Además de los métodos disponibles en los formularios (GET y POST)
// ABM (acronimo) -> ALTA, BAJA, MODIFICACIÓN
// CRUD (acronimo) -> C:CREATE | R:READ | U:UPDATE | D:DELETE
// M.HTTP ->          POST     | GET    | PUT      | DELETE

// https://developer.mozilla.org/es/docs/Web/HTTP/Methods

// https://www.atatus.com/glossary/content/images/2021/07/CRUD.jpeg

// ! Status HTTP
// Es la respuesta que nos va a entregar el backend. El resultado de la comunicación.

// * Respuesta informativas (100-199)
// * Respuesta satisfactorias (200-299)
// * Redirecciones (300-399)
// * Errores de clientes (400-499)
// * y errores de los servidores (500-599)

// https://developer.mozilla.org/es/docs/Web/HTTP/Status
// https://http.cat/
// https://httpstatusdogs.com/
// https://www.youtube.com/shorts/TtYLv8COtJk

// ! Headers HTTP
// Dentro del protocolo HTTP los archivos va a tener una cabecera de petición y una cabecera de respuesta

// https://developer.mozilla.org/es/docs/Web/HTTP/Headers

// API Productos

// GET -> CRUD -> R:READ -> http://localhost:8080/productos
// POST -> CRUD -> C:CREATE -> http://localhost:8080/productos + el nuevo producto
// PUT -> CRUD -> U:UPDATE -> http://localhost:8080/productos/id + el producto editado
// DELETE -> CRUD -> D:DELETE -> http://localhost:8080/productos/id

// console.log('Inicio')
// console.log('Tarea/Proceso 1'); for (let index = 0; index < 1e10; index++) {} // 10_000_000_000
// console.log('Tarea/Proceso 2'); for (let index = 0; index < 1e10; index++) {} // 10_000_000_000
// console.log('Tarea/Proceso 3'); for (let index = 0; index < 1e10; index++) {} // 10_000_000_000
// console.log('Tarea/Proceso 4'); for (let index = 0; index < 1e10; index++) {} // 10_000_000_000
// console.log('Tarea/Proceso 5'); for (let index = 0; index < 1e10; index++) {} // 10_000_000_000
// console.log('Tarea/Proceso 6'); for (let index = 0; index < 1e10; index++) {} // 10_000_000_000
// console.log('Fin')


// Asincronico -> No secuencial

// console.log('Inicio')
// setTimeout(()=>{
//   console.log('Se muestra luego de 15 segundos')
// },15000)
// console.log('Fin')



// setTimeout(createBrotliCompress, milisegundos)

// console.log(Inicio)
// setTimeout(()=>{
//   console.log('En 5 segundos voy a aparecer...')
//   console.log(new Date().toLocaleTimeString())
//   console.log('Fin')
// }, 5000) // 5 segundos

// Callback hell -> Piramide de la perdicion -> Aparece primesas por este incoveniente

console.warn('//! Promises')
// Las promesas nos ayudan a gestionar de una manera mas amable la asincronia Remplza a los callbacks
//Las priomesas estan dentro del lenguaje de Javascript

//una promesa tiene tres estados
// 1. Pendiente(pending): esta en proceso
// 2. Se cumplio (fulfilled): se resolvio existosamente
// 3. No se cumplio -> Rechazada (rejected): ocurrio un error


//------------------------------------------------------------------------

//Promise(cb) <-------- una funcion ejecutada pasada como argumento de otra
// resolve y reject son referencias de funciones
// resolve -> Se usa cuando quiero que se cumpla la promesa
// reject -> Se usa cuando quiero que no se cumpla promesa

// const promesa = new Promise(function(resolve, reject) {
//   console.log(resolve) // funciones que entrega el Promise cuando lo instacio
//   console.log(reject) // funciones que entrega el Promise cuando lo instacio
// })
// console.log(promesa)

// ! una promesa que nunca se cumple
// const promesa = new Promise(function(resolve, reject){
//   reject()
// })

// console.log(promesa)

//! Una promesa que siempre se cumple

// const promesa = new Promise(function(resolve, reject){
//   reject()
// })

// console.log(promesa)

const cumpleBeta = false

const promesa = new promesa(function(resolve,reject){
  setTimeout(()=>{
    if(cumpleBeta){
      resolve('Fui al cumple. Cumpli')
    }else{
      reject('No fui al cumple. Y no ser me cae la cara de verguenza')
    }
  },10000) // 10 segundos
})

console.log(promesa)