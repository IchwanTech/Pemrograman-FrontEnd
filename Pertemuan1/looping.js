const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//ini looping foreach
array.forEach((element) => {
  console.log(`Looping ke ${element}`);
});

//ini looping for
for (let i = 0; i < array.length; i++) {
  console.log(`Looping ke ${array[i]}`);
}

//ini looping while
let i = 0;
while (i < array.length) {
  console.log(`Looping ke ${array[i]}`);
  i++;
}

//ini looping do while
let j = 0;
do {
  console.log(`Looping ke ${array[j]}`);
  j++;
} while (j < array.length);
