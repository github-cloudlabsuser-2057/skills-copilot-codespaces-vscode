// test.js
const readline = require('readline');
const { PassThrough } = require('stream');
const { expect, test } = require('@jest/globals');
const path = require('path');
const { fork } = require('child_process');

function simulateUserInput(input) {
  const inputSource = new PassThrough();
  inputSource.write(input);
  inputSource.end();
  return inputSource;
}

function captureOutput() {
  return new PassThrough();
}

test('addition operation', (done) => {
  const input = simulateUserInput('5\n3\nadd\n');
  const output = captureOutput();
  const child = fork(path.join(__dirname, 'your-file.js'), {
    stdio: [input, output, process.stderr, 'ipc'],
  });

  let outputData = '';
  output.on('data', (data) => {
    outputData += data.toString();
  });

  child.on('exit', () => {
    expect(outputData).toContain('The result is: 8');
    done();
  });
});

// Add more tests for 'sub', 'mul', 'div', and error cases