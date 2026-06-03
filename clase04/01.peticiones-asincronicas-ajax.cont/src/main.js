import './style.css'

// ! Repaso Promesas

const respuestaConProductos = true // 1. true

// Si la promesa cumple -> Uso el resolve
// Si la promesa no se cumple -> Uso el reject

// const promesaObtenerProductos = new Promise((resolve, reject)=>{
//   if(respuestaConProductos){
//     const listaProductos = [{id:1},{id:2},{id:3}]
//     resolve(listaProductos)
//   } else{
//     const error = {ok:false, status: 404, msg: 'No se pudo obtener los productos'}
//     reject(error)
//   }
// })

console.log(promesaObtenerProductos) // 1. fulfilled (cumplio)  // 2. reject no se cumplio

// then(), catch(), finally()
// promesaObtenerProductos // <--------- Promise (Promesa) -> a. pending | b. fulfilled | c. reject

// channing <----- encadenamiento de metodos
// promesaObtenerProductos
//   .then((data) => {
//     console.log('THEN: La promesa se cumplio',data)
//   })  // la promesa se cumple -> then ( solamente se va a ejecutar cuando la  promesa se cumple)
//   .catch(() => {
//     console.error('CATCH: La promesa no se cumplio', error)
//   })  // la promesa no se cumplio -> catch() solamente se va ejecutar cuando la promesa no se cumplio
//   .finally(() => {
//     console.log('Se ejecuta siempre. Fin')
//   }) // El Finally se va a ejecutar siempre, tanto si se ejecuta antes el then como el cath

// async y await (ES8)
// convierto una funcion sincronica a asincronica usando la palabra async
// await siempre va a de la mano del async
const obtenerProductos = async () => {
//  la promesa esta es estado pedding -> fulfilled o rejected  
  try{
    const promesa = await promesaObtenerProductos 
    console.log('THEN -> async/await: La promesa se cumplio', promesa)
  } catch(error){
    console.error('No se cumplio')
  }
}

obtenerProductos()

// BLoque de manejo de errores try/catch

// console.log('Inicio')
// try{
//   console.log('Paso 1')
//   console.log('Paso 2')
//   console.log('Paso 3') // <------- aca hay un error
//   console.log('Paso 4')
//   console.log('Paso 5')
// } catch (error){
//   console.log('No se pudo', error)
// } finally {
//   console.log('TODO OK')
// }
// console.log('Fin')