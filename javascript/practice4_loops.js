// for loops

for( let i=0;i<10;i++){
    console.log(i);
}

console.log('---------');
let x = 1;
while (x<6) {
    console.log(x);
    break;
    
}
console.log('---------');
let y = 1;
do {
    console.log(y);
    y++;
} while (y<=6);
console.log('---------');

let names = ["Clark","Bruce","Barry","Diana","John"];
for(let i = 0; i <names.length; i ++){
    console.log(names[i]);
}

console.log('---------');
for(let each of names){
    console.log(each);
}

console.log('---------');// sit back and relax

names.forEach(each=>console.log(each));

// create a method to print a given value
function printStuff( stuff){
    console.log 
}