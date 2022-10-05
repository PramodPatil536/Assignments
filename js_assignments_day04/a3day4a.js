const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = array.filter((number) => {

  return number % 2 === 0;

});

console.log(even);