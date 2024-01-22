//UNION TYPES para aceptar varios tipos:
//Funciona a nivel de valores:
type HeroPowerScale = 'low' | 'medium' | 'high';

//Y tambien a nivel de tipos:
let x:number | string;

//Incluso funciona con mixto entre valores y tipos:
let y: number | "E";
//Esta variable puede tener cualquier numero y solo la letra E

//INTERSECTION TYPES para añadir las definiciones de tipos:
type HeroBasicInfo={
    name:string,
    age:number
}

type HeroProperties = {
    powerScale: HeroPowerScale,
    isActive?: boolean
}
//Hero tiene que cumplir con toda la definicion de HeroBasic mas la de HeroProperties
type Hero = HeroBasicInfo & HeroProperties;


//TYPE INDEXING
//Podemos acceder a propiedades de los tipos para usar estructuras anidadas como un nuevo tipo
type Operario = {
    id: number,
    isActive: boolean,
    address:{
        street: string,
        city: string,
    }
}

const juanito : Operario ['address'] = {
    street: "Calle falsa 123",
    city: "Bogota"
}

//TYPE EXTRACTION
//Podemos hacer el proceso inverso, extraer el tipo de una variable y usarlo como un nuevo tipo
const earth ={
    name: "Earth",
    size: 23242343
}

type Planet = typeof earth;

const mars : Planet = {
    name: "Mars",
    size: 43534
}

//RETURNTYPE EXTRACTION
//Tambien podemos extraer el tipo de un retorno de una funcion
function HeroFunction (){
    return {
        planet: "Earth",
        age:2323
    }
}

type SuperHeroe = ReturnType<typeof HeroFunction>
