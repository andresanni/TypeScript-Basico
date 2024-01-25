//Nos devuelve un HTMLElement, pero TS no tiene forma de saber qué elemento en concreto
const button = document.getElementById("button");
//La solucion rapida es indicarle nosotros a TS cual es el tipo concreto dentro de HTMLElement
const button2 = document.getElementById("button2") as HTMLButtonElement;

//Lo ideal seria chequear el tipo concreto despues de la asignacion:
if(button2 != null && button2 instanceof HTMLButtonElement){
    //TS va a inferir que si pasa la condicion es un button element
    //y nos va a dar acceso a sus metodos
}

