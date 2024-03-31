#! /usr/bin/env node 
import inquirer from "inquirer";

let todos = [];

let condition = true;

while(condition)
 {
  
 let addTask = await inquirer.prompt(
  [
    {
      name: 'YourList',
      type: 'input',
      message: "What you willing to add in your Todos ?"
    },

    {
      name: 'addMore',
      type: 'confirm',
      message: "Do you willing to add more ?",
      default: "false"

    }

  ]

);
todos.push(addTask.YourList);
condition = addTask.addMore
console.log(todos)

}