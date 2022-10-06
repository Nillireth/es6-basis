//Traer la dependencia del componente SUMA
//import {sumar, restar} from './sumar.js'
//import estudiantes from './materias.js'
import materias from './materias.js'

//let: variables
//let a = 10

//const: constante
//const b = 29

//console.log('suma de a + b:' + sumar(a, b))
//console.log(`suma de a + b: ${sumar(a, b)}`)
//console.log(`resta de a - b: ${restar(a, b)}`)

//Desestructuración:
//let {first_name , last_name, id, DNI} = estudiantes

//console.log(`Nombre estudiante: ${id}`)
//console.log(`Nombre estudiante: ${DNI}`)
//console.log(`Nombre estudiante: ${first_name}`)
//console.log(`Nombre estudiante: ${last_name}`)
//////////////////////////////////////

//1. recorrido de arreglos: forEach
materias.forEach((materia) => { 
    if(materia.profesor === 'Cristian Buitrago'){
        console.log(`materia: ${materia.name}`)
        console.log(`notas: ${materia.notas}`)
        console.log(`profesor: ${materia.profesor}`)

    }
 })
//2- Convertir a un arreglo de profesores
//metodo map()
let profesores  = materias.map(function(materia){
    return materia.profesor
})
//3. Agregar una materia al arreglo de materias 
// push()
materias.push({
    id:5,
    name: "CULTURA FISICA",
    profesor: "Luis Baquero",
    notas: [2.0, 3.5]
})

//4. Busqueda en arreglos:
//find()
const PHP = materias.find(function(materia){
    return materia.profesor === 'Cristian Biutrago'
})

console.log(PHP)
