function sumArrayIntegers(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array.');
    }
  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
        throw new Error('Array must contain only integers.');
      }
      sum += arr[i];
    }
  
    return sum;
  }
  const inputArray = [1, 2, 3, 4, 5];
  const result = sumArrayIntegers(inputArray);
  console.log(result); 
    