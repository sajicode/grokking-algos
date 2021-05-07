function binarySearch(list, item) {
  let high = list.length - 1;
  let low = list[0];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];

    if (guess === item) return mid;
    if (guess > item) high = mid - 1;
    else low = mid + 1;
  }

  return null
}