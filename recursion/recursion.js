function countdown(num) {
  console.log(num);
  if (num <= 0) return;
  countdown(num - 1);
}

function factorial(x){
  if (x === 1) return x;
  return x * factorial(x - 1)
}