const add = require('../main');
const createMultilyTable = require('../mainMultilyTable');

// it ('should add two numbers', () => {
//     expect(add(2, 3)).toBe(5);
// });

it ('should require two numbers multily table', () => {
    let firstNumber = 2;
    let secondNumber = 4;
    const result = createMultilyTable(firstNumber, secondNumber);
    expect(result[0][0]).toBe("2*2=4");
    expect(result[1][0]).toBe("2*3=6");
    expect(result[2][0]).toBe("2*4=8");
});
