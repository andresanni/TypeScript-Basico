/*
Define una función llamada sumar que tome dos parámetros de tipo number y devuelva la suma de ambos. 
Asegúrate de proporcionar anotaciones de tipo tanto para los parámetros como para el valor de retorno.
*/
function sumar(a: number , b: number):number{
    return a + b;
}

const sumarConFlecha = (a:number, b:number):number =>{
    return a + b;
}

/*
Define una función llamada obtenerLongitud que tome un array de strings como parámetro 
y devuelva la longitud del array. Anota correctamente los tipos de entrada y salida.
*/

const obtenerLongitud = (array: string[]):number =>{
    return array.length;
}

/**
Define un tipo de objeto llamado Persona con las siguientes propiedades:
nombre de tipo string.
edad de tipo number.
email de tipo string (opcional).
Luego, define una función llamada mostrarInformacion que tome un parámetro de tipo Persona 
y muestre por consola su información, incluyendo el nombre, la edad y, si está presente, el email.
 */

type Persona = {
    nombre:string,
    edad:number,
    email?:string
}

const mostrarInformacion = (persona : Persona):void => {
    const {nombre, edad, email} = persona;
    console.log("Nombre: " + nombre);
    console.log("Edad: " + edad) 
    if(email){
        console.log("Email: " + email)
    }
}

/**
 * Define una función llamada duplicar que tome un parámetro que puede ser de tipo number o string y 
 * devuelva el doble de ese valor en caso de ser un número, 
 * o el string duplicado si es una cadena. Anota correctamente los tipos.
 */

const duplicar = (input : number | string) : number | string => {
    if (typeof input === "number"){
        return input * 2
    }
    else{
        return input + input;
    }
}