console.log("Trabalhando com listas");

const listaDeDestinos = new Array(
    "São Paulo",
    "Salvador",
    "Rio de Janeiro"
);

listaDeDestinos.push("Curitiba");

console.log(listaDeDestinos);
listaDeDestinos.splice(1, 1);

console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);