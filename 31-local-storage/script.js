// console.log(': ', window);

console.log(': ', Object.getOwnPropertyNames(window) );

// LOCAL STORAGE METHODS
// setItem(): Add key and value to localStorage
// getItem(): This is how you get items from localStorage
// removeItem(): Remove an item by key from localStorage
// clear(): Clear all localStorage
// key(): Passed a number to retrieve the key of a localStorage

// window.localStorage.setItem("key", "value");
window.localStorage.setItem("firstName", "John");
localStorage.setItem("lastName", "Doe");

const person = {
  fullName: "John Doe",
  location: "madina",
};

localStorage.setItem("user", JSON.stringify(person))

const fruits = ["Pineapple", "Mango", "Pawpaw"];