'esversion: 6';
'use strict';
// const log = require("./myLog.js");

///////////////// Imports /////////////////
const chalk = require('chalk');
const yargs = require('yargs');
const tasks = require("./tasks.js");


///////////////// Commands /////////////////

////// Adding
yargs.command({
  command: 'add',
  desc: 'Adiciona uma tarefa à todo list',
  builder: {
    name: {
      describe: 'nome',
      demandOption: true,
      type: 'string'
    },
    description: {
      describe: 'descrição',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    console.log(chalk.yellow("Adding task to to do list"));
    tasks.addTask(argv.name, argv.description)
  }
});

////// Listing
yargs.command({
  command: 'list',
  desc: 'Lista as tarefas da todo list',
  // builder: (yargs) => yargs.default('value', 'true'),
  handler: (argv) => {
    console.log(tasks.listTasks());
  }
});

////// Removing
yargs.command({
  command: 'remove',
  desc: 'Remove uma tarefa da lista',
  builder: {
    name: {
      describe: 'Task to be deleted',
      demandOption: true,
      type: 'string'
    }},
  handler: (argv) => {
    console.log(chalk.red("Removendo tarefa: ", argv.name));
    tasks.removeTask(argv.name);
  }
});

////// Reading
yargs.command({
  command: 'read',
  desc: 'Lê tarefas da lista',
  builder: {
    name: {
      describe: 'Task to be checked',
      demandOption: true,
      type: 'string'
    }},
  handler: (argv) => {
    console.log(chalk.yellow('Reading tasks', argv.name));
    const taskFound = tasks.findTask(argv.name);
    console.log(JSON.stringify(taskFound, null, 2));
  }
});

///////////////// Parse? /////////////////
yargs.parse();


// Indicate end of processing
console.log("- - - - - - - - - - - -");
console.log(" end of call");
console.log("- - - - - - - - - - - -");

// Log function for future back up
// log("Primeira Mensagem de Log.");
// log("Segunda Mensagem de Log.");
