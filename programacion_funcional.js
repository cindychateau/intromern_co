function hacerPasta(pasta, hacerSalsa){ //pasta = "Fetuccini", hacerSalsa = hacerSalsaPesto
    console.log("Hervir el agua");
    console.log("Agregar "+pasta+" pasta al agua");
    
    hacerSalsa(); //hacerSalsaPesto();

    console.log("Revolvemos pasta con la salsa hecha");
    console.log("Pasta Lista ;)");

}

function hacerSalsaAlfredo(){
    console.log("Revolvemos los ingredientes para Salsa Alfredo");
}

function hacerSalsaPesto(){
    console.log("Revolvemos los ingredientes para Salsa Pesto");
}

hacerPasta("Spaghetti", hacerSalsaAlfredo);

console.log('-----------');

hacerPasta("Fetuccini", hacerSalsaPesto);


//1.- Hacemos referencia a una función específica (Callback)
//2.- Pedimos que ejecutre la función después N cantidad de MILISEGUNDOS
const ejecutaDespues = () => console.log("Algunos milisegundos después");

setTimeout(ejecutaDespues, 3000); //Aquí usamos callback

setTimeout(()=>{
    console.log("Otro segundos despues");
}, 4000) //Aquí usamos función anónima



/** FUNCIONES PARA ARREGLOS **/
//MAP - Nos hace una copia de la lista/arreglo y regresa esa copia con algo extra
const estudiantes = ["Elena de Troya", "Juana de Arco", "Pedro Páramo", "Gabriel García Marquez"];

const listaEstudiantes2 = estudiantes.map( estudiante => "<li>"+estudiante+"</li>");

var callbackMap = (estudiante, posicion, arreglo) => estudiante+" ;) "+posicion+arreglo[0];
const listaEstudiantes = estudiantes.map(callbackMap);

function callbackMap2(valor, posicion) {
    return valor+" está en posición:"+posicion;
}

const listaEstudiantes3 = estudiantes.map(callbackMap2);

console.log(listaEstudiantes3);


//FILTER - Nos regresa el arreglo en base a una condición que nosotros le indiquemos
const filtro = item => item.includes("de"); //CALLBACK
const oLista = estudiantes.filter(filtro);

const iLista = estudiantes.filter(item => item.includes("de"));

console.log(oLista);

uLista = [];
for(let i=0; i<estudiantes.length;i++){
    let item = estudiantes[i];
    if(item.includes('de')){
        uLista.push(item);
    }
}


