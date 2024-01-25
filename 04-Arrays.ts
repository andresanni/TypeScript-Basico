//Hay 2 sintaxis posibles para tipar arrays:
const languages: string[] = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "Ruby",
  "PHP",
  "Swift",
  "Go",
];

//O
const numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Si queremos tipar un array de objetos, podemos usar la sintaxis de objetos:
const users: { name: string; age: number }[] = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 40 },
];

//Si queremos que acepte mas de un tipo de dato el array:
const mixedArray: (string | number)[] = ["Hello", 10, "pepe", 42];

//MATRICES
//Tenemos bien contemplados los tipos pero no la estructura de cada Array
//Podriamos agregar un 4to elemento y TS no se quejaria
const board : (string | null)[][] = [
  ["X", null, "O"],//[] No daria error al agregar otro
  [null, null, "X"],
  ["X", "O", null],
];

//Para solucionarlo vamos a urtilizar TUPLAS:
type CellValue = 'X' | 'O' | null;

//Definimos las tuplas con la cantidad de elementos en cada Array
type GameBoard = [
    [CellValue,CellValue,CellValue],
    [CellValue,CellValue,CellValue],
    [CellValue,CellValue,CellValue],
]


const boardd : GameBoard = [
    ["X", null, "O"],//[] Ahora si nos daria error
    [null, null, "X"],
    ["X", "O", null],
  ];

  //El problema que tinen las tuplas es que  todavia nuestros arrrays son mutables
  //van a respetar la estructura a la hora de la asignacion pero luego no dan error
  //cuando se les manipula con metodos como el push()

  