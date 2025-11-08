What is a Closure? https://youtu.be/3a0I8ICR1Vg?si=AbzAXBiyDfhiia8e
- A closure gives a function memory, it can “remember” the environment in which it was created.


Example chatgpt gave 

A closure happens when an inner function still has access to the variables of the outer function, even after the outer function has finished running.

function outer() {
  let message = "Hi there!";

  function inner() {
    console.log(message);
  }

  return inner; **returning inner, not running it yet**
}

const greet = outer(); **run outer once**
greet(); // Hi there!

