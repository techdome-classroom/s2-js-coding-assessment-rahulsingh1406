/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let result = 0;
    let prevValue = 0;
  
    for (let i = s.length - 1; i >= 0; i--) {
      const currentValue = romanNumerals[s[i]];
  
      if (currentValue < prevValue) {
        result -= currentValue;
      } else {
        result += currentValue;
      }
  
      prevValue = currentValue;
    }
  
    return result;
  }
  
  // Test cases
  

module.exports={romanToInt}
const testCases = [
    "III",
    "LVIII",
    "MCMXCIV",
  ];
  
  for (let testCase of testCases) {
    const result = romanToInt(testCase);
    console.log(`Input: ${testCase}, Output: ${result}`);
  }