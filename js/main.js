let timesEspanhois = ['Barcelona', 'Real Madrid', 'Athletic Bilbao', 'La Coruña', 'Atletic Madrid', 'Getafe'];
let frutas = [];

console.log(timesEspanhois);
//modificar o valor de um item do array
timesEspanhois[0] = 'Betis';
//ler o valor de um item do array
console.log(`Valor do time da posição número 3 ${timesEspanhois[3]}`);
let time = timesEspanhois[5];
console.log(`Valor da variável time ${time}`);
//mostrando o conteúdo de todo o array
console.log(`Conteúdo do Array ${timesEspanhois}`);
//Adicionando elementos no array
timesEspanhois.push('Real Sociedad');
frutas.push('Abacate');
console.log(`Conteúdo do Array ${frutas}`);
//array.shift | array.unshift | array.pop

console.log(timesEspanhois.join('-'));

console.log(timesEspanhois.length); //mostrando o comptimento do array
console.log(`Último time do array ${timesEspanhois[timesEspanhois.length-1]}`); //mostrando o ultimo item

timesEspanhois.forEach(element => {
    console.log(element);
});

for (let index = 0; index < timesEspanhois.length; index++) {
    console.log(timesEspanhois[index]);
    
}