## Iterator

What it is:
- An object that returns one value at a time when you call its `next()` method.
- Each `next()` call returns an object: `{ value, done }` where `done` is `true` when iteration is finished.

Why it’s useful:
- Precise control over looping (pause, stop early, skip items).
- Build custom data structures that are loopable.
- Save memory by producing values on demand instead of all at once.

Key terms:
- **Iterable**: An object with a method named `[Symbol.iterator]()` that returns an iterator. Built-ins: `Array`, `String`, `Map`, `Set`, typed arrays, and more.
- **Iterator**: An object with a `next()` method that returns `{ value, done }`.
- **[Symbol.iterator]**: Special method the `for...of` loop and other features use to obtain an iterator.

Minimal iterator contract (shape):

```javascript
const iterator = {
  next() {
    // return { value: any, done: boolean }
  }
};
```

Basic example with an array:

```javascript
const numbers = [10, 20, 30];

// Get an iterator from an iterable via [Symbol.iterator]()
const iterator = numbers[Symbol.iterator]();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

Using `for...of` with iterables (gets the iterator behind the scenes):

```javascript
for (const n of [10, 20, 30]) {
  console.log(n);
}
// 10
// 20
// 30
```

Other JS features that use iterables:
- Spread: `const copy = [...setOrArray];`
- Destructuring: `const [first, second] = someIterable;`
- `Map`/`Set` iteration: `for (const [k, v] of map)` and `for (const v of set)`


In JS, every iterable object object has a built-in special method called [Symbol.iterator]. It’s a hidden function inside those objects that knows how to loop through them.

Common pitfalls:
- Confusing iterable vs iterator: iterable has `[Symbol.iterator]()`, iterator has `next()`.
- Reusing an iterator after it’s done: most iterators are single-use; call `[Symbol.iterator]()` again to start over.
- Mutating a collection while iterating can lead to unexpected results.

Quick recap (cheat sheet):
- Get iterator: `const it = iterable[Symbol.iterator]();`
- Consume: `it.next()` → `{ value, done }`
- Loop: `for (const item of iterable) { ... }`
- Make iterable: define `[Symbol.iterator]()` that returns an object with `next()`.


