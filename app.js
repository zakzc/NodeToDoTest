'esversion: 6';
'use strict';
// const log = require("./myLog.js");
const chalk = require('chalk')
// const argv = require('yargs').argv;
const yargs = require('yargs');

yargs.command({
  command: 'add',
  desc: 'Adiciona uma tarefa à todo list',
  builder: {
    name: {
      describe: 'nome',
      demandOption : true,
      type : 'string'
    },
    description : {
      describe: 'descrição',
      demandOption : true,
      type : 'string'
    }
  },
  handler: (argv) => {
    console.log(chalk.blue("Adicionando tarefas")),
    console.log(argv);
  }
});

yargs.command({
  command: 'list',
  desc: 'Lista uma tarefa à todo list',
  // builder: (yargs) => yargs.default('value', 'true'),
  handler: (argv) => {
    console.log(chalk.green("Listando tarefas"))
  }
});

yargs.command({
  command: 'remove',
  desc: 'Remove uma tarefa da lista',
  // builder: (yargs) => yargs.default('value', 'true'),
  handler: (argv) => {
    console.log(chalk.blue("Removendo tarefas"))
  }
});

console.log("\n- - - - - - - - - - - -");
console.log(yargs.argv);
console.log("- - - - - - - - - - - -\n");

// yargs.parse();


// log("Primeira Mensagem de Log.");
// log("Segunda Mensagem de Log.");
