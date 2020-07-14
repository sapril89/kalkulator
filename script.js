const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
	calculatorScreen.value = number;
}

const inputNumber = (number) => {
	if (currentNumber === '0') {
		currentNumber = number;
	} else {
		currentNumber += number;
	}
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value);
		updateScreen(currentNumber);
	});
});

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value);
	});
});

const inputOperator = (operator) => {
	prevNumber = currentNumber;
	calculationOperator = operator;
	currentNumber = '';
}

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
	calculate();
	updateScreen(currentNumber);
})

const calculate = () => {
	let result = ''
	switch (calculationOperator) {
		case '+':
			result = parseInt(prevNumber) + parseInt(currentNumber)
			break
		case '-':
			result = parseInt(prevNumber) - parseInt(currentNumber)
			break
		case '*':
			result = parseInt(prevNumber) * parseInt(currentNumber)
			break
		case '/':
			result = parseInt(prevNumber) / parseInt(currentNumber)
			break
		default:
			return
	
}
currentNumber = result
calculationOperator = ''
}

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
	clearAll();
	updateScreen(currentNumber);
})

const clearAll = () => {
	prevNumber = '';
	calculationOperator = '';
	currentNumber = '0';
}
