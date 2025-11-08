***Scoping***

What is Scoping? https://youtu.be/TkFN6e9ZDMw?si=q429YAm69-4Tqhh1
- scope is a set of codes that has all of the variables defined in it and the variables can only be accesed inside that scope.

For example:

Const a = 1; **This variable is in the global scope, accessible anywhere in the code**

function test() {
    const b = 2; **This variable is in the function scope**
    console.log(a, b); **this will be printed out bcuz b is defined within the function scope and a is defined in a global scope**
}

test();
console.log(a, b); **this will print out error because b is defined inside the test function scope which can't be accessible if you are calling it from outside of the scope**

Four different type of scopes:

1. Global Scope 
- variables declared outside any function or block.
- accessible in any other file in the entire project.

Downside of global scope:
- **Name conficts**: If two scripts use the same variable name, they can accidentally overwrite each other.
- **Memory Usage**: Global variables stay in memory until the page or program ends which can waste memory if you don’t really need them that long.
- **Harder to debug**: When variables live in the global scope, it means any part of your code can change them for e.g. functions, loops, event handlers, or even other files.

2. Module Scope
- a module in JS is a seperate file that contains its own private code.
- Anything you declare inside that file e.g. variables, functions, or classes, stays inside it unless you choose to export it.
- It can also be imported

why do modules exist?

Before ES6 (2015), JS didn’t have real modules, all code went into global scope.
 which then caused:
 - Variable name clash
 - harder debugging
 - messy or tangled code

 Now with ES Modules, JS code can be:
 - organized in seperate files (Each file focuses on one purpose e.g. math functions)
 - reused across projects (By using imports & exports)
 - easier to debug and maintain (You always know where a variable or function belongs)

 TO USE Module:
 - type="module" has to be added into the script tag:
           <script type="module" src="main.js"></script>

- to import code e.g.:
          import { add, areaOfCircle } from "./math.js";

3. Function Scope - variables declared inside a function, only accessible inside that function.

4. Block scope - variables declared inside {} (like loops or if statements), only accessible inside that block.


