const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (firstNum) => {
  rl.question('Enter the second number: ', (secondNum) => {
    rl.question('Enter the operation (add, sub, mul, div): ', (operation) => {
      let result;
      firstNum = parseFloat(firstNum);
      secondNum = parseFloat(secondNum);

      switch (operation) {
        case 'add':
          result = firstNum + secondNum;
          break;
        case 'sub':
          result = firstNum - secondNum;
          break;
        case 'mul':
          result = firstNum * secondNum;
          break;
        case 'div':
          if (secondNum != 0) {
            result = firstNum / secondNum;
          } else {
            console.log('Error! Division by zero.');
            rl.close();
            return;
          }
          break;
        default:
          console.log('Invalid operation!');
          rl.close();
          return;
      }

      console.log(`The result is: ${result}`);
      rl.close();
    });
  });
});