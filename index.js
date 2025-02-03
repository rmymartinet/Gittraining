function removeDuplicates(arr) {
  arr.sort((a, b) => a - b);

  let left = 1;
  let right = 1;

  while (left < arr.length) {
    if (arr[left] !== arr[left - 1]) {
      arr[right] = arr[left];

      console.log(arr[left], arr[right]);

      right++;
    }

    left++;
  }

  // Tronquer le tableau pour ne garder que les éléments uniques
  arr.length = right;

  return arr;
}

removeDuplicates([1, 2, 2, 4, 4, 6, 7, 8, 9]); // [1, 2, 4, 6, 7, 8, 9]fvfdgdf
