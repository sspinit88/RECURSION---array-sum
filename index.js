/**
 * Имеется массив чисел.
 * Нужно просуммировать все числа и вернуть сумму.
 * ! Не использовать циклы!
 */

const doSum= (array, sum) => {
  sum = sum || 0;

  if (!!array.length) {
    return doSum(array, sum + array.pop());
  }

  return sum;
};

console.log(doSum([1, 2, 3]));
