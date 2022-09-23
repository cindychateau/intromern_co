class Vehiculo {

    /* A través de el constructor nosotros creamos una instancia de nuestro objeto
       Parecido a lo que hacías con __init__ en Python
    */
    constructor(año, marca, modelo, color, ruedas) {
        this.año = año; //self.año = año
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.ruedas = ruedas;
    }

    acelerar() {
        return "Aceleramos";
    }

}

module.exports = Vehiculo;