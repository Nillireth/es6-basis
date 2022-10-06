let colors = require('colors');

const estudiantes1 = ["Juan Diego", 
                      "Juan Camilo", 
                      "Laura", 
                      "Nicolas"];
                    
const estudiantes2 = ["Paula",
                      "Verito",
                      "Daniela",
                      "Julian"];

//Operador spread(rest)
const estudiantes3 = ['Valentina', 
                      ...estudiantes1, 
                      'Maria',
                      ...estudiantes2]

console.log(estudiantes3)


