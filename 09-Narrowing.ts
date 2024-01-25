function mostrarLongitud(objeto: string | number): number {
  if (typeof objeto === "string") {
    //TS deduce que si se llegó acá el objeto es un string, 
    //y lo define como tal
    return objeto.length;
  }
  //TS sabe que si se ejecuta este flujo del método es un number
  return objeto.toString().length;
}

//Ejemplo mas complejo
//Creamos dos interfaces con caracteristicas compartidas, y una diferente
interface Mario{
    company: string,
    nombre:string,
    saltar: ()=>void
}

interface Sonic{
    company: string,
    nombre:string,
    correr: ()=>void
}

type Personaje = Mario | Sonic;

function jugar (personaje: Personaje){
    //Hasta ahora puede ser cualquiera de los dos
    //por eso TS solo nos habilita las compartidas
    console.log(personaje.nombre);
}


