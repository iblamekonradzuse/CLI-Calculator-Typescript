import { question } from 'readline-sync';

function main(): void {
    const firstStr: string = question('enter first number:\n');
    const operator: string = question('enter operator:\n');
    const secondStr: string = question('enter second number:\n');

    const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

    console.log(validInput);
    
}


function isOperator(operator: string): boolean {
    switch(operator){
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}

function isNumber(str: string ): boolean{

    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;

}

main();