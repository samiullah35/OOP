#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcom!");
        const ans = await inquirer.prompt({
            name: "selet",
            type: "list",
            message: "What would you like to do?",
            choices: ["staff", "student", "exit"]
        });
        if (ans.select == "staff") {
            console.log("you approach the staff room. please feel free to ask any questions");
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Please enter student name"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}.Nice to meet you!`);
                console.log("New student added");
                console.log("current student list");
                console.log(persons.students);
            }
            else {
                console.log(`Hello i am ${student.name}.Nice to see you again!`);
                console.log("Exiting student list");
                console.log(persons.students);
            }
        }
        else if (ans.select == "exit") {
            console.log("Exiting the program...");
            process.exit();
        }
    } while (true);
};
programStart(persons);
