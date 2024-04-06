#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let dueDate =[];
let time =[];
let condition = true;

while(condition) {
  let todoQuestions = await inquirer.prompt([
    {
      name:"firstQuestion",
      type:"input",
      message:"What would you like to add in your Todos?",
    },
    {
      name:"dueDate",
      type:"input",
      message:"Enter due date for your task (mm/dd/yy)",

    },
    {
      name:"time",
      type:"input",
      message:"Enter time to complete your task (24-Hours-Format(hrs:sec))",
    },
    
    {
      name:"secondQuestion",
      type:"confirm",
      message:"would you like to add more in your todos?",
      dafault:"false",
    },
  ]);

  todos.push(todoQuestions.firstQuestion);
  dueDate.push(todoQuestions.dueDate);
  time.push(todoQuestions.time);
  condition = todoQuestions.secondQuestion;
  console.log(todos);
  console.log(dueDate);
  console.log(time);
}
