// const strings = ["apple", "banana", "cherry", "date"];
// const num = 5;
// const newArr = strings.filter((item) => item.length <= num);
// console.log(newArr);

const arr = [
  { item: "comp", price: 500, inStock: true },
  { item: "mouse", price: 100, inStock: true },
  { item: "headphone", price: 300, inStock: true },
  { item: "ciggarate", price: 5000, inStock: false },
  { item: "gaechao", price: 6010, inStock: false },
];

const filterItem = (arr) => {
  const below500 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].price < 500) {
      below500.push(arr[i]);
    }
  }
  return below500;
};

filterItem(arr);

const string = "vimal";

const reverse = (str) => {
  let reversedStr = ""; // Corrected variable name
  for (let i = str.length - 1; i >= 0; i--) {
    // Corrected loop condition
    reversedStr += str[i];
  }
  return reversedStr;
};

console.log(reverse(string)); // Output: "lamiv"
