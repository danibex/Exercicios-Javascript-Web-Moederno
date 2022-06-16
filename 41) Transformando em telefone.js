// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
function createPhoneNumber(numbers){
    let newNumber = numbers.join("")
    return `(${newNumber.slice(0, 3)}) ${newNumber.slice(3, 6)}-${newNumber.slice(6, 10)}`
  }
  
  let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  let array2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

  console.log(createPhoneNumber(array1))
  console.log(createPhoneNumber(array2))