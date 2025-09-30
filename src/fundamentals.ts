let sales = 20_000_000;
let course = 'TypeScript';
let is_published = true;
let level; //any
level = 1;
level = 'a';


function render(document: any) {
    console.log(document);
}

//Arrays
let numbers: number[] = [1, 2, '3']; //string not allowed
let numbers2 = [1, 2, 3];
//code completion should suggest number methods
numbers.forEach(n => n)

//Tuples
let user: [number, string] = [1, 'Mosh',0];//3rd element not allowed
let user1: [number, string] = [1, 'Mosh'];

