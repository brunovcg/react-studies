import React, { useEffect } from "react";

function App() {

  function getRange(num1, num2) {
    let range = [];
    if (!num1 || !num2) {
      return false;
    }
    for (let i = num1; i < num2; i++) {
      range.push(i);
    }
    return range.length;
  }

  function closestNumbers(numbers) {
    let sortedNumbers = [...numbers].sort((a, b) => a - b);
    let minimumDelta = 0;
    let setOfNumbers = [];

    for (let i = 0; i < sortedNumbers.length -1; i++) {
      let currentNumber = sortedNumbers[i];
      let nextNumber = sortedNumbers[i + 1];
      let range = getRange(currentNumber, nextNumber);
      if (range === minimumDelta  || !setOfNumbers[0] ) {
        setOfNumbers.push([currentNumber, nextNumber]);
      } else if (range < minimumDelta) {
        minimumDelta = range;
      }
    }

    // console.log(setOfNumbers)
    setOfNumbers.forEach((item) => console.log(item[0], item[1]));
  }

  useEffect(() => {
    console.log(closestNumbers([ -1, -3]));
  }, []);

  return <div>xxx</div>;
}

export default App;
