// Inferencia de tipo: TS deduce el tipo por el dato mismo
//
const a = 1;
const b = 2;
const c = a + b;
// La variable c ha inferido el tipo number

//Nos va a dar error por asignación de tipo incorrecta
// y también por acceso a propiedades inexistentes:
//
const cadena = "hola";
//❌ cadena = 2
//❌ cadena.propiedadInexistenteEnString

//El tipo any anula la inferencia:
const n: any = 5;
//No es tomado como number a pesar de la asiganción

//Funciones:
//Los parametros no infieren y hay que especificarlo
function mostrarDatos(nombre: string, edad: number) {
  console.log("Me llamo" + nombre + " y tengo " + edad + " años");
}

//Desestructuracion en los parametros: Diferente sintaxis.
//Tenemos 2 opciones:
function muestraDatos({ nombre, edad }: { nombre: string; edad: number }) {
  nombre.toLowerCase();
  edad.toPrecision();
}

//O:
function muestrDatos(persona: { nombre: string; edad: number }) {
  //Con esta sintaxis estamos obligados a extraer los valores manualmente
  const { nombre, edad } = persona;
  nombre.toLowerCase();
  edad.toPrecision();
}

//Para el retorno, en el siguiente caso tenemos inferencia:
function muestDatos({ nombre, edad }: { nombre: string; edad: number }) {
  //...Logica sobre datos
  return edad; //Inferido como number
}

//Para especificar el tipo cuando no hay inferencia:
function muesDatos({ nombre, edad }: { nombre: string; edad: number }): number {
  return edad;
}

//Arrow Functions : 2 sintaxis posibles:
const add = (a: number, b: number): string => {
  return "Los numeros ingresados son " + a.toString + " , " + b.toString;
};

//O
const suma: (a:number, b:number)=>string = (a,b)=>{
    return "Los numeros son: " +a.toString +" , "+  b.toString;
}


//Funciones callbacks
const sayHiFromFunction = (fn) => {
  fn("Miguel");
};

sayHiFromFunction((name) => {
  console.log("Hola " + name);
});

//La forma correcta de agregar los tipos seria:
//fn es una funion que acepta un string y no devuelve
const sayHiFroFunction = (fn: (name: string) => void) => {
  fn("Miguel");
};

//Para que haya coherencia, este parametro tiene que ser string
sayHiFroFunction((name: string) => {
  console.log("Hola " + name);
});


//Inferencia en funciones
const avengers = ["Spidey","Hulk","Ironman"];

avengers.forEach((avenger)=>{
  //avenger tiene inferido el tipo string por el contexto
  avenger.toLowerCase();
})

