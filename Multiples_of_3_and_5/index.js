// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// Если выписать все натуральные числа меньше 10, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих чисел равна 23.

// Найдите сумму всех чисел меньше 1000, кратных 3 или 5.

const sumOfmultiples = (a) => {
    const iter = (counter, acc) => {
      if (counter <= 0) {
        return acc;
      }
  
      console.log(acc);
      if (counter % 3 === 0 || counter % 5 === 0) {
        acc += counter;
      }
      return iter(counter - 1, acc);
    };
    return iter(a, 0);
  };
  
  sumOfmultiples(999);