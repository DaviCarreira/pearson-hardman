let nome = "Davi"
//alert(nome);
console.log(nome);

const x = 10;
const list = ["a", "b", "c"]; // extrutura de array e obejto 100% usado em javascript
const objeto = { nome: "Davi", age:39}; // array é uma lista com - obejto com chave

console.log(x);
console.log(typeof x);
console.log('----------------------');
console.log(lista);
console.log(typeof lista);
console.log('----------------------');
console.log(objeto);
console.log(typeof objeto);
console.log(objeto.nome);


let opcao = true; //boolean

// condicional
if (2 >1){
    console.log("2 é maior que 1")
} else { // se não
    console.log("2 não é maior que 1")
}

//Estrutura de repetição 
// i + i = 1
const arr = ["amora", "banana", "caju", "damasco", "franboesa"];
for (let i = 0; i < arr.length; i++) { // repetição
console.log('O valor da repetição é '+arr[i])


//template literal, é o uso da crase
console.log(`O valor da repetição é ${arr[i]}`);
} 

//função
function soma(){
    console.log(22+11);
}
soma();

function calcula(a,b){
    console.log(a*b)
}
calcula(12,12);