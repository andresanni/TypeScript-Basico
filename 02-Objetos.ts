//Con los OBJETOS hay inferencia por asignación
let hero = {
    name:'thor',
    age:1500
}
//hero: {name:string, age:number}

//TYPE ALIAS: Creando nuestros propios tipos
type Heroe = {
    name:string,
    age:number
}

//Podemos usar nuestro tipo para que el objeto cumpla las reglas
let spiderman : Heroe = {
    name:"spidey",
    age:34
}

//Incluso podemos aplicar el tipo a las funciones que devuelven objeto:
function createHero(name:string, age:number):Heroe{
    const hero ={name, age}
    //Para poder servir como retorno de esta funcion tiene que coincidir con el tipo Heroe
    return hero
}

const capitanAmerica = createHero("capitan", 100); //--->capitanAmerica es del tipo Heroe

//OPTIONAL PROPERTIES
type Mascota = {
    raza: string,
    edad: number,
    //Esta propiedad, si esta, tiene que respetar el tipo definido aqui. Pero es opcional
    isActive?: boolean
}

//OPTIONAL CHAINING
//Podemos, sin necesidad de condicional, operar con propiedades opcionales:
const rafael: Mascota = {raza:"caniche", edad: 15}
//Al encadenar sobre la propiedad opcional, TS agrega el signo automaticamente y se vuelve condicional
rafael.isActive?.valueOf

//READ ONLY
type Empleado ={
    readonly id: number,
    name:string
}
//❌No se puede modificar el valor de la propiedad id

//TEMPLATE UNION TYPES
//Estamos creando un tipo que acepta la estructura de 5 strings separados por -
type HeroId = `${string}-${string}-${string}-${string}-${string}`;

//const id:HeroId = 2312312; ❌
const id:HeroId= "sdasd-dasdas-dasda-sdadas-sda" //✔
