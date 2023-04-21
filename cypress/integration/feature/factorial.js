import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import FactorialPage from "../../pageObjects/factorialPage";

let dataToCompare;

Given(`the user is already in the factorial calcuator`, () => {
    FactorialPage.visit();
});

When(`the user input the {} as data`, (data) => {
    dataToCompare = data;
    FactorialPage.doCalculate(data);
});

Then(`the result should be the correct`, () => {
    FactorialPage.getFactorialResult().should('include.text', factorialize(dataToCompare));
});

Then(`the alert should be pop up`, () => {
    FactorialPage.getFactorialResult().should('have.text', `Please enter an integer`);
});

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }