export class gato {
    nombre;
    imagen;
    sexo;
    comida;

    constructor(nombre, imagen){
        this.nombre = nombre;
        this.imagen = imagen;
    }

    saludar(){
        return `Hola! Me llamo ${this.nombre}`;
    }

    maullar(){
        return `Miauuuu!!!`;
    }

    comer(comida){
        if(this.comida == comida){
            return `Gracias!`;
        } else {
            return `Lo siento, solo como ${this.comida}`;
        }
    }
}
