function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];
    if (element < smallest) {

      smallest = element;
      smallestIndex = i;
    }
  }
  console.log('here')

  return smallestIndex;
}

//TODO fix this
function selectionSort(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr)
    const smallest = findSmallest(arr);
    console.log(smallest)
    // * array.splice returns an array of the returned element
    // * since we would be deleting just one element each time, return the first item
    newArr.push(arr.splice(smallest, 1)[0])
    console.log(arr)
  }
  return newArr;
}

const myList = [5,3,6,2,10];