// Name:
// Class:

// JavaScript1

/* 1. Create a function, named logObj, that:
    - Takes 1 argument: an object, with 3 properties
    - Loops over the object and put each value into a separate variable
    - Concatenates the values into a single string
    - Log to the console the string, including the following: '{NAME} is {AGE} and works as an {JOB}!'
    - Return the string

    Expected output:
    'Noer is 28 and works as an Education Director'
*/
const person = {
  name: "Anis",
  age: 41,
  job: "translator",
};

function logObj(obj) {
  const { name, age, job } = obj;
  const output = `${name} is ${age} years old and works as a ${job}`;
  console.log(output);
  return output;
}
logObj(person);
/* 2. Create a function, named logNumbers, that:
      - Takes 2 arguments: a start number and an end number
      - Has a loop that starts from the start number and ends until the end number
      - Log to the console each number, however...
      - If the number is a multiple of 3 output the string “Fizz”,
      - If the number is a multiple of 5 output the string “Buzz”
      - If the number is a multiple of 3 AND 5 output the string “FizzBuzz”
      - Make use of the modulo operator and check for the remainder: %

      Expected output:
      logNumbers(1, 15);
      1
      2
      Fizz
      4
      Buzz
      6
      ...
      13
      14
      FizzBuzz

      Use the following values: 1 (start number) and 100 (end number)
*/
function logNumber(startNumber, endNumber) {
  for (let i = startNumber; i <= endNumber; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        console.log("FizzBuzz");
        break;
      case i % 3 === 0:
        console.log("Fizz");
        break;
      case i % 5 === 0:
        console.log("Buzz");
        break;
      default:
        console.log(i);
    }
  }
}
logNumber(1, 100);

// JavaScript2

/* 3. Create a function, named toNumbers, that:
      - Takes in 1 argument: an array of strings
      - Get the index position number of each value
      - Create a new array that includes all these numbers 
      - Make use of the map() function
      - Log to the console the array of numbers
      - Return the array of numbers

      Expected output:
      [0, 1, 2, 3]

      Use the following array: const letters = ['a', 'b', 'c', 'd'];
*/
function toNumbers(str) {
  const numbers = str.map((arr, index) => index);
  return numbers;
}
const letters = ["a", "b", "c", "d"];
toNumbers(letters);

/* 4. Create a function, called injectBooksToDOM, that:
      - Takes 1 argument: an array of objects
      - Loops over the array
      - Injects each object's content into the DOM in an unordered list
      - Make use of the forEach() function
      - Returns true if it works, false if it doesn't
  
      Target the '#root' element in 'index.html'.
      Use the following object: 
      const books = [
            {
                  bookName: "The Nature of Software Development",
                  author: "Ron Jeffries",
                  coverURL:
                        "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
            },
            {
                  bookName: "Clean Code",
                  author: "Robert Cecil Martin",
                  coverURL:
                        "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg"
            }
      ];
*/
const books = [
  {
    bookName: "The Nature of Software Development",
    author: "Ron Jeffries",
    coverURL:
      "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png",
  },
  {
    bookName: "Clean Code",
    author: "Robert Cecil Martin",
    coverURL:
      "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg",
  },
];
function injectBooksToDOM(arrayOfBooks) {
  const bookList = document.createElement("ul");
  arrayOfBooks.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.style.listStyle = "none";
    const cover = document.createElement("img");
    cover.src = book.coverURL;
    cover.style.width = "50px";
    const bookDescription = document.createElement("p");
    bookDescription.textContent = `${book.bookName} by ${book.author}`;
    bookList.appendChild(cover);
    bookList.appendChild(bookDescription);
  });
  document.getElementById("root").appendChild(bookList);
}
injectBooksToDOM(books);

/*
5. What's the output for this snippet? Is the output deterministic (always the same) or might it depend on the browser
we run this in? 
Explain your answer in less than 150 words. (The 'yes or no' answer doesn't really matter to us, 
the explanation why is the important part)

function test() {
    console.log('one');
    setTimeout(function() {
        console.log('two');
        setTimeout(function() {
            console.log('three');
        }, 0);
    }, 1000);
    setTimeout(function() {
        console.log('four');
        setTimeout(function() {
            console.log('five');
        }, 1000);
    }, 0);
    console.log('six');
}
test(); // ?
*/
/* When the function runs the execution starts at the first line and it logs to the console 'one', the second line is a setTimeout function that runs after a second, so it moves to a queue, and starts counting down. the second setTimeout also moves to a que and starts counting down, but its timeout is 0, but it executes only when the execution stack is empty. So the next in execution stack is console.log(6), which logs 6 to the console. the execution stack is empty now, so the set timeout with 0 milliseconds executes first and logs 'four' , and the set timeout within it moves to the queue. By this time the execution stack is empty again, so the first timeout function executes and logs two, and the setTimeout within it moves to the queue, but because it has zeo timeout it almost immediately logs out to the console three, because the execution stack is empty and the last timeout function didn't finish counting down yet. Finally, the last timeout of 1 second finishes and logs five to the console.
I really have no idea , but I assume that it will perform the same on all browsers, as long as they support the setTimeout function.
*/
