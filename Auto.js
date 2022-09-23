const Vehiculo = require("./Vehiculo");

/* HEREDAMOS DE LA CLASE VEHICULO */
class Automovil extends Vehiculo {

    constructor(año, marca, modelo, color, ruedas, placas){
        //super(año, marca, modelo, color, ruedas) //Utilizamos la palaba SUPER para hacer referencia a mi clase superior
        super(año, marca, modelo, color, ruedas);
        this.placas = placas || "123"; //Si existe placas? -> this.placas = placas y si no-> this.placas = "123"
        this.motor = "Automático"; //Asignar directament un atributo con un valor por default
    }

    acelerar() {
        // let mensaje_padre = super.acelerar();
        // return mensaje_padre+" RUMMMM!";
        return "RUMMMM!";
    }

}


const auto1 = new Vehiculo(1991, "Honda", "Civic", "Blanco", 4);

const bici1 = new Vehiculo(2010, "Bici1", "Bici de Montaña", "Roja", 2);

console.log(auto1.marca);

console.log(auto1.acelerar());

const automovil = new Automovil(2010, "Mazda", "CX-3", "Azul", 4)
console.log(automovil.placas);
console.log(automovil.acelerar());