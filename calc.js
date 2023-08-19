import inquirer from "inquirer";
import sumOfTwo from "./sum.js";
import diffOfTwo from "./diff.js";
import prodOfTwo from "./prod.js";
import divOfTwo from "./div.js";
import chalk from "chalk";
let answer = await inquirer.prompt([{
        name: "userName",
        type: "string",
        message: "enter name : "
    },
    {
        name: "email",
        type: "string",
        message: "enter email : "
    },
    {
        name: "cotact",
        type: "number",
        message: "enter mobile : "
    },
    {
        name: "enterOperator",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        message: "enter operation"
    },
    {
        name: "num1",
        type: "number",
        message: "enter 1st number : "
    },
    {
        name: "num2",
        type: "number",
        message: "enter 1st number : "
    }
]);
const { num1, num2, enterOperator } = answer;
if (num1 && num2 && enterOperator) {
    let result = 0;
    //Addition
    if (enterOperator === "Addition") {
        result = sumOfTwo(num1, num2);
    }
    else if (enterOperator === "Subtraction") {
        result = diffOfTwo(num1, num2);
    }
    else if (enterOperator === "Multiplication") {
        result = prodOfTwo(num1, num2);
    }
    else if (enterOperator === "Division") {
        result = divOfTwo(num1, num2);
    }
    console.log("The output is = ", chalk.bold.bgGreenBright(result));
}
else {
    console.log(chalk.red.bold.italic.bgCyanBright("Valid Input Required"));
}
