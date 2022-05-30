'use strict'

/*
* Coded by Elo1lson
* GitHub: elo1lson
* Um simples script a fins de diversão para simular um virus
* Esse script ira rodar  infinitas vezes, ao menos que seu pc morra, ou vc digite Ctrl+C, ou feche o terminal
*/

const chalk = require('chalk');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let yes = chalk.green("Y");
let no = chalk.red("N");
let input = chalk.blue(`Pronto para começar? [${yes}/${no}]?`);

rl.question(input, function (result) {
  result = result.toLocaleUpperCase();

  if (result === 'Y') {
    console.log(chalk.green('Preparando para destruir seu sistema'));
    for (let i = 1; i > 0; i++) {
      let m = Math.floor(Math.random() * 9)
      console.log(chalk.red(`Apagando arquivos do sistema${chalk.blue(`..................${chalk.green(`[${i}/${i + 10}] ${m}mb/s`)}`)}`));
    }
  } else if (result === 'N') {
    rl.close();
  } else {
    console.log(chalk.yellow("Tente novamente..."))
    rl.close()
  }
});

rl.on('close', function () {
  console.log(chalk.yellow('\nBYE BYE !!!\nQueria brincar com voçe'));
  process.exit(0);
});