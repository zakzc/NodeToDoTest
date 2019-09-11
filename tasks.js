'esversion: 6';
'use strict';

///////////////// Imports /////////////////

const fs = require('fs');
const chalk = require('chalk');

///////////////// Base functions /////////////////

const loadAllTasks = () => {
  // ler todas as tarefas
  try {
    const taskBuffer = fs.readFileSync('tasks.json');
    return JSON.parse(taskBuffer.toString());
  } catch (error) {
    return [];
  }
};

const saveTasks = (data) => {
  const tasksJSON = JSON.stringify(data);
  fs.writeFileSync('tasks.json', tasksJSON);
  console.log("wrote: ", tasksJSON);
};

///////////////// Exports /////////////////

const addTask = (name, description) => {
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

const listTasks = () => {
  console.log(chalk.blue.bold("lista de tarefas"));
  const mytasks = loadAllTasks();
  return JSON.stringify(mytasks, null, 2);
};

const removeTask = (name) => {
  const tasks = loadAllTasks();
  const taskstokeep = tasks.filter(function(tasks){
    return tasks.name !== name;
  });
    saveTasks(taskstokeep);
    console.log(chalk.red("Tarefa de nome: ", name, " foi removida"));
};

const findTask = (name) => {
  const tasks = loadAllTasks();
  const tasksFound = tasks.find(function(tasks) {
    return tasks.name === name
  });
  if (tasksFound != undefined) {
    return tasksFound;
  } else {
    return "no tasks found";
  }

};

///////////////// Exporting module /////////////////
module.exports = {
      addTask,
      listTasks,
      removeTask,
      findTask
    };
