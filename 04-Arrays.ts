//Hay 2 sintaxis posibles para tipar arrays:
const languages: string[] = ['JavaScript', 'Python', 'Java', 'C#', 'C++', 'Ruby', 'PHP', 'Swift', 'Go'];

//O
const numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Si queremos tipar un array de objetos, podemos usar la sintaxis de objetos:
const users: { name: string, age: number }[] = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 40 }];

//Si queremos que acepte mas de un tipo de dato el array:
const mixedArray: (string | number)[] = ['Hello', 10, 'pepe',42];

