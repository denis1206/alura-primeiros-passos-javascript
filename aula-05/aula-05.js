console.log("Trabalhando com loops");

const listaDeDestinos = new Array(
    "São Paulo",
    "Salvador",
    "Rio de Janeiro"
);

//listaDeDestinos.push("Curitiba");

console.log(listaDeDestinos);

const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada;
const destino = "Salvador";

const podeComprar = idadeComprador >= 18 && temPassagemComprada;

let contador = 0;
let destinoExiste = false;

// while(contador < 3){

//     if(listaDeDestinos[contador] == destino){
//         destinoExiste = true;
//         break;
//     }

//     contador++;
// }

for(let i=0; i<=listaDeDestinos.length; i++){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
        break;
    }
}

if(destinoExiste){
    console.log("Destino existe");
}else{
    console.log("Destino não existe");
}

if(podeComprar && destinoExiste){
    console.log("Boa viagem");
}else{
    console.log("Desculpe, tivemos um erro");
}

