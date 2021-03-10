const myColorArray = ["yellow", "blue", "red", "orange"];

// for
let i = 0;
while (i < myColorArray.length) {
  console.log(myColorArray[i]);
  i++;
}

// while
for (let i = 0; i < myColorArray.length; i++) {
  console.log(myColorArray[i]);
}

// NIEUW
myColorArray.forEach((color) => console.log(color));
