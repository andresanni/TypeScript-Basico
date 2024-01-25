interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

//A diferencia de los tipos las interfaces se pueden extender
interface Zapatilla extends Producto {
  talle: number;
}
const zapa: Zapatilla = {
  id: 3,
  nombre: "dasd",
  precio: 34,
  talle: 23,
};

//Para las funciones en las interfaces hay 2 sintaxis:
interface CarritoOps {
  //sintaxis 1
  add: (product: Producto) => void;
  //sintaxis 2
  remove(product: Producto): void;
}
