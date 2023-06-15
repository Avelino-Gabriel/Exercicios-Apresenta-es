
const Frutas = {
  Banana: 'Amarelo',
  Maçã: 'Vermelho',
  Laranja: 'Laranja',
  Uva: 'Roxo',
  Morango: 'Vermelho',
};

const nomeFruta = prompt('Digite o nome de uma fruta:');


if (Frutas.hasOwnProperty(nomeFruta)) {
  const corFruta = Frutas[nomeFruta];
  alert(`A cor da fruta ${nomeFruta} é ${corFruta}.`);
} else {
  alert('Fruta não encontrada no enum.');
}
