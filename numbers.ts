const numbers = [1, 2, 3, 8, 5, 6];

// numbers[0] = "Type 'string' is not assignable to type 'number'" // error

// fn syntax old
numbers.forEach(function (e, i) {
  if (i == 3) numbers[i] = 4;
});

console.log(numbers);

// fn syntax hipster 💩
numbers.forEach((e, i) => {
  if (i == 3) numbers[i] = 4;
});

console.log(numbers);
