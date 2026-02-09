const readline = require("readline");
const operacoes = require("./main");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Escolhe a operação:");
console.log("1 - Soma");
console.log("2 - Subtração");
console.log("3 - Multiplicação");
console.log("4 - Divisão");

rl.question("Digite o número da operação: ", (op) => {
  const oper = op.trim();

  rl.question("Primeiro número: ", (n1) => {
    rl.question("Segundo número: ", (n2) => {

      const a = Number(n1.trim());
      const b = Number(n2.trim());

      switch (oper) {
        case "1":
          console.log("Resultado:", operacoes.soma(a, b));
          break;

        case "2":
          console.log("Resultado:", operacoes.subtracao(a, b));
          break;

        case "3":
          console.log("Resultado:", operacoes.multiplicacao(a, b));
          break;

        case "4":
          console.log("Resultado:", operacoes.divisao(a, b));
          break;

        default:
          console.log("Operação inválida");
      }

      rl.close();
    });
  });
});

