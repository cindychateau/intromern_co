//Para ejecutar utilizamos node nombre_archivo.js
console.log("¡Hola a todos!"); //Para imprimir usamos console.log

const alumnos = ['Elena', 'Juana', 'Pablo', 'Pedro']; //const NO puede ser modificada

const v_o_f = true; 

var ejemplo = 'X'; //Las var tienen un alcance más global, es decir que está disponible a través de toda mi aplicación

let ejemplo_2 = 'Y' //Let solamente existen en ese bloque de código

function imprimirNombres() {
    for (let index=0; index < alumnos.length; index++){
        let name = alumnos[index]; //Guardo en una variable el nombre del alumno en base a la ronda en la que estoy
        console.log(name+' alumno está en '+index);
    }

    //console.log('El último nombre e index fueron:', name, index);
}

let name = 'David';

function imprimirNombres2() {
    var abc = "abc";
    let index = 0; //Por la posición, ahora el scope de mi index es la función completa
    let name;
    for(index; index < alumnos.length; index++){
        name = alumnos[index];
        console.log(name+' alumno está en '+index);
    }

    console.log('El último nombre e index fueron:', name, index);
}

imprimirNombres2();

console.log(name);

console.log(variable_prueba); //A través de elevación sabe que ya va a existir una variable llamada variable_prueba

var variable_prueba = "hola ;)";

console.log(variable_prueba);

//console.log(variable_prueba2); -> Nos da error ya que SOLAMENTE las var pueden elevarse

let variable_prueba2 = "Hola 2";

helloWorld();

//Las funciones también se pueden ejecutar aunque No se hayan declarado antes de llamarlas
function helloWorld() {
    var nombre = "Elena";
    console.log("Hola", nombre);
}

/** DESESTRUCTURACION: Cuando nosotros queremos obtener algo de información de nuestras estructuras **/
//Objetos
const alumno = {
    nombre: "Elena",
    apellido: "De Troya",
    email: "elena@codingdojo.com",
    password: "ContraseñaSegura123"
}

const {email, password} = alumno; //Forzosamente tanto la variable como el atributo deben tener el mismo nombre
console.log(email, password);

var apellido = "Apellido de prueba";

const {apellido: apellidoElena} = alumno; //Obtenemos el atributo apellido y lo guardamos en una variable llamada apellidoElena
console.log(apellidoElena);

console.log(alumno);

console.log(apellido);

//Listas/Arrays
const animales = ['tortuga', 'perro', 'gato', 'pez']
var [primerAnimal, segundoAnimal, tercerAnimal, cuartoAnimal] = animales; //Debemos de poner la MISMA estructura que nosotros tuvieramos originalmente

console.log(cuartoAnimal);

const alumno2 = {
    nombre: 'Juana',
    apellido: 'De Arco',
    email: 'juana@codingdojo.com',
    password: 'Contraseña123',
    direcciones:
        [
            {
                direccion: 'Francia 123',
                ciudad: 'Paris',
                cp: 1000
            },
            {
                direccion: 'Sócrates 221',
                ciudad: 'Roma',
                cp: 2000
            }
        ]
}

const { direcciones: [dir1, dir2] } = alumno2; //Obtengo la lista de direcciones y guardo los elementos en una variable llamada dir1 y el segundo en dir2
console.log(dir2);

const { direcciones: [, direccion2] } = alumno2; //Si quiero obtener SOLO los datos del segundo elemento, dejo en blanco un espacio y le pongo una coma
console.log(direccion2);

const { direcciones:  [, {ciudad: ciudadDir2}] } = alumno2; //Obtenemos la ciudad del segundo elemento de mi lista de direcciones
console.log(ciudadDir2);


/** SPREAD - Podemos guardar el resto de nuestra estructura en otra variable **/
const [primerAnimalito, ...restoAnimales] = animales;
console.log(restoAnimales);

const {nombre: primerNombre, ...restoAtributos} = alumno2;
console.log(restoAtributos);

//Copia objeto
const copia_alumno2 = {...alumno2};
console.log(copia_alumno2);


/** FUNCIONES FLECHA **/
function sumatoria(parametro1, parametro2){
    return parametro1+parametro2;
}

console.log(sumatoria(1, 2));

var sumatoriaFlecha = (parametro1, parametro2) => parametro1+parametro2;

console.log(sumatoriaFlecha(3, 4));

function hola(nombre){
    console.log('Hola', nombre);
}

var holaFlecha = nombre => console.log('Hola', nombre);

holaFlecha('Elena');

var helloWorldFlecha = () => console.log("Hello World!");

helloWorldFlecha();

/** OPERADOR TERNARIO - Hace que nuestras sentencias IF sean más cortas **/
let i = 1;
let j = 2;
if(i > j){
    console.log("i es mayor a j");
} else {
    console.log("j es mayor a i");
}

console.log( i > j ? "t: i es mayor a j" : "t: j es mayor a i" ); // condición ? lo que queremos que se haga si se cumple : lo que queremos que se haga si no se cumple

if(i == j) {
    console.log("i es igual a j");
}else if(i < j){
    console.log("i es menor a j");
}else {
    console.log("j es menor a i");
}

console.log( i == j ? "i es igual a j" : i < j ? "i es menor a j" : "j es menor a i" );