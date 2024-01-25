const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const response = await fetch(API_URL);

if(!response.ok){
    throw new Error('Request failed');
}
//TS no tiene forma de inferir el tipo de data
const data = await response.json() as Array<object>;

const posts = data.map(post=>{
    console.log(post)
})
