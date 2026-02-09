function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) return "Erro: divisão por zero";
  return a / b;
}

function potencia(a, b) {
  return Math.pow(a, b);
}

function modulo(a, b) {
  return a % b;
}

function raizQuadrada(a) {
  return Math.sqrt(a);
}

function valorAbsoluto(a) {
  return Math.abs(a);
}

function porcentagem(a, b) {
  return (a * b) / 100;
}

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  potencia,
  modulo,
  raizQuadrada,
  valorAbsoluto,
  porcentagem
};
