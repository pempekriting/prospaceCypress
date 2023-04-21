import { URL }from "./basePage.js";

const inputFiled = `input[id='number']`;
const buttonCalculate = `button[id='getFactorial']`;
const resultCalculate = `p[id='resultDiv']`;

class FactorialPage { 

    static visit() {
        cy.visit(URL)
    }

    static doCalculate(data) {
        cy.get(inputFiled).type(data);
        cy.get(buttonCalculate).click();
    }

    static getFactorialResult() {
        return cy.get(resultCalculate);
    }
}

export default FactorialPage;