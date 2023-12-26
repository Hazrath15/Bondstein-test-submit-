function findIndeces(list, sum) {
  for (i = 0; i < list.length; i++) {
    for (j = i + 1; j < list.length; j++) {
      if (list[i] + list[j] == sum) {
        return [i, j];
      }
    }
  }
}

const numbers = [34, 40, 43, 52, 55, 60, 65];
const targetValue = 108;

twoIndices = findIndeces(numbers, targetValue);

console.log(twoIndices);
