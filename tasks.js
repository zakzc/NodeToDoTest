'esversion: 6';
'use strict';

///////////////// Imports /////////////////

const fs = require('fs');
const chalk = require('chalk');

///////////////// Base functions /////////////////

const loadAllTasks = function() {
  // ler todas as tarefas
  try {
    const taskBuffer = fs.readFileSync('tasks.json');
    return JSON.parse(taskBuffer.toString());
  } catch (error) {
    return [];
  }
};

const saveTasks = function(data) {
  const tasksJSON = JSON.stringify(data);
  fs.writeFileSync('tasks.json', tasksJSON);
  console.log("wrote: ", tasksJSON);
};

///////////////// Exports /////////////////

const addTask = function(name, description) {
  const tasks = loadAllTasks();
  const duplicatedTasks = tasks.find(function(task) {
      return task.name == name
    });
    if (!duplicatedTasks) {
      console.log(tasks);
      const newTask = {
        name,
        description
      };
      tasks.push(newTask);
      saveTasks(tasks);
      console.log(chalk.green.bold("Task added"));
    } else {
      console.log(chalk.red.bold("Duplicated task"));
    }
};

const listTasks = function() {
  console.log(chalk.blue.bold("lista de tarefas"));
  const tasks = loadAllTasks();
  return tasks;
};

const removeTask = function(name) {
  const tasks = loadAllTasks();
  const taskstokeep = tasks.filter(function(tasks){
    tasks.name !== name;
  });
    saveTasks(taskstokeep);
    console.log(chalk.red("Tarefa de nome: ", name, " foi removida"));
};

///////////////// Exporting module /////////////////
module.exports = {
      addTask,
      listTasks,
      removeTask
    };