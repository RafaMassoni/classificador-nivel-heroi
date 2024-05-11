const [nomeHeroi, experienciaHeroi] = process.argv.slice(2);

console.log("Valor 1:", nomeHeroi);
console.log("Valor 2:", experienciaHeroi);


var nivelHeroi = '';

if (experienciaHeroi > 10000) {
    nivelHeroi = 'Radiante';
}
else if (experienciaHeroi > 9000) {
    nivelHeroi = 'Imortal';
}
else if (experienciaHeroi > 8000) {
    nivelHeroi = 'Ascendente';
}
else if (experienciaHeroi > 7000) {
    nivelHeroi = 'Platina';
}
else if (experienciaHeroi > 5000) {
    nivelHeroi = 'Ouro';
}
else if (experienciaHeroi > 2000) {
    nivelHeroi = 'Prata';
}
else if (experienciaHeroi > 1000) {
    nivelHeroi = 'Bronze';
}
else {
    nivelHeroi = 'Ferro';
}



console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);