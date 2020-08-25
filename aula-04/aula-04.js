console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    "São Paulo",
    "Salvador",
    "Rio de Janeiro"
);

listaDeDestinos.push("Curitiba");

console.log(listaDeDestinos);

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;

// if(idadeComprador >= 18){
//     listaDeDestinos.splice(1, 1);
// }else if(estaAcompanhada){
//     listaDeDestinos.splice(1, 1);
//     console.log('Está acompanhada');
// }else{
//     console.log("Comprador não é maior de idade")
// }

if(idadeComprador >= 18 || listaDeDestinos.splice(1, 1)){
    listaDeDestinos.splice(2, 1);
}else{
    console.log("Comprador não é maior de idade")
}

console.log("Embarque \n\n");

if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Nâo pode embarcar");
}

console.log(listaDeDestinos);
//console.log(listaDeDestinos[1]);