const readline = require("readline");
const op = require("./operacoes");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log("\n=== CALCULADORA ===");
  console.log("1 - Somar");
  console.log("2 - Subtrair");
  console.log("3 - Multiplicar");
  console.log("4 - Dividir");
  console.log("5 - Potência");
  console.log("6 - Módulo");
  console.log("7 - Raiz Quadrada");
  console.log("8 - Valor Absoluto");
  console.log("9 - Porcentagem");
  console.log("0 - Sair");
}

function iniciar() {
  menu();

  rl.question("Escolha uma opção: ", (opcao) => {
    opcao = Number(opcao);

    if (opcao === 0) {
      console.log("Saindo...");
      rl.close();
      return;
    }

    // operações com 1 número
    if (opcao === 7 || opcao === 8) {
      rl.question("Digite um número: ", (a) => {
        a = Number(a);
        let resultado;

        if (opcao === 7) resultado = op.raizQuadrada(a);
        if (opcao === 8) resultado = op.valorAbsoluto(a);

        console.log("Resultado:", resultado);
        iniciar();
      });
      return;
    }

    // operações com 2 números
    rl.question("Digite o primeiro número: ", (a) => {
      rl.question("Digite o segundo número: ", (b) => {
        a = Number(a);
        b = Number(b);
        let resultado;

        switch (opcao) {
          case 1: resultado = op.somar(a, b); break;
          case 2: resultado = op.subtrair(a, b); break;
          case 3: resultado = op.multiplicar(a, b); break;
          case 4: resultado = op.dividir(a, b); break;
          case 5: resultado = op.potencia(a, b); break;
          case 6: resultado = op.modulo(a, b); break;
          case 9: resultado = op.porcentagem(a, b); break;
          default:
            console.log("Opção inválida");
            iniciar();
            return;
        }

        console.log("Resultado:", resultado);
        iniciar();
      });
    });
  });
}

iniciar();
