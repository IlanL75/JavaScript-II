// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function beHappy() {
  let dont = "Don't worry";
  function song() {
    console.log(dont + " be happy");
  }
  song();
}
console.log(beHappy());


// ==== Challenge 2: Create a counter function ====
const counter = () => { 
  let count = 0;
  return () => (++count);
};
const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
