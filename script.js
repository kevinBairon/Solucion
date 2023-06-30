function getLastFourDigits(position) {
    const modulo = 10000n;
    let currentNumber = 2025n;
    let previousNumber1 = 2024n;
    let previousNumber2 = 2023n;
  
    const relativePosition = (position - 1n) % 15000n;
  
   
    for (let i = 0; i < relativePosition; i++) {
      const sum = (currentNumber + previousNumber1 + previousNumber2) % modulo;
      previousNumber2 = previousNumber1;
      previousNumber1 = currentNumber;
      currentNumber = sum;
    }
  
    return currentNumber.toString().padStart(4, '0');
  }
  
  const position = 2023202320232023n;
  const lastFourDigits = getLastFourDigits(position);
  
  console.log(`Los últimos cuatro dígitos del número en la posición ${position} son: ${lastFourDigits}`)