## Generator

What it is:
- A special function that can pause and resume. It produces a sequence of values over time.
- Defined with `function*` and uses `yield` to produce values.
- Calling a generator function returns an iterator (a generator object) that is also iterable.

Why it’s useful:
- Easier way to build iterators without manually writing `next()` objects.
- Produce values lazily (on demand) and write clean, stateful sequences.
- Enable two-way communication: you can send values back into the generator via `next(value)`.

Syntax basics:

```javascript
function* gen() {
  yield 'a';
  yield 'b';
  return 'done'; // final value, not iterated by for...of
}

const it = gen();
console.log(it.next()); // { value: 'a', done: false }
console.log(it.next()); // { value: 'b', done: false }
console.log(it.next()); // { value: 'done', done: true }
```

Generators are iterable:

```javascript
function* countTo(n) {
  for (let i = 1; i <= n; i++) {
    yield i;
  }
}

for (const n of countTo(3)) {
  console.log(n);
}
// 1
// 2
// 3
```

Sending values into a generator:

```javascript
function* echo() {
  const first = yield 'send me a value';
  // first receives the value passed to next()
  yield `you sent: ${first}`;
}

const g = echo();
console.log(g.next());          // { value: 'send me a value', done: false }
console.log(g.next('hello'));   // { value: 'you sent: hello', done: false }
console.log(g.next());          // { value: undefined, done: true }
```

Controlling a generator with `return()` and `throw()`:

```javascript
function* work() {
  try {
    yield 1;
    yield 2;
  } finally {
    // cleanup runs on return() or completion
  }
}

const w = work();
w.next();                // { value: 1, done: false }
console.log(w.return(0)); // { value: 0, done: true }

// You can also inject errors
function* task() {
  try {
    yield 'start';
  } catch (e) {
    yield `caught: ${e.message}`;
  }
}
const t = task();
t.next();                 // { value: 'start', done: false }
console.log(t.throw(new Error('boom'))); // { value: 'caught: boom', done: false }
```

Delegation with `yield*`:

```javascript
function* a() { yield 1; yield 2; }
function* b() { yield* a(); yield 3; }

console.log([...b()]); // [1, 2, 3]
```

Infinite or on-demand sequences (be careful):

```javascript
function* idMaker(start = 0) {
  let id = start;
  while (true) {
    yield id++;
  }
}

const ids = idMaker(1);
ids.next(); // { value: 1, done: false }
ids.next(); // { value: 2, done: false }
```

Using generators to make custom iterables:

```javascript
const range = {
  from: 3,
  to: 5,
  [Symbol.iterator]: function* () {
    for (let n = this.from; n <= this.to; n++) {
      yield n;
    }
  }
};

console.log([...range]); // [3, 4, 5]
```

Async note:
- There are also async generators: `async function* () { ... }` yielding Promises; consume with `for await...of`.

Common pitfalls:
- Forgetting the `*` in `function*` or using `yield` outside a generator.
- Expecting `return` value to appear in `for...of` (it doesn’t; `return` only appears in the final `{ done: true }`).
- Accidentally exhausting a generator and trying to reuse it (create a new one by calling the generator function again).

Quick recap (cheat sheet):
- Define: `function* name() { yield x; }`
- Consume: `const it = gen(); it.next()` → `{ value, done }`
- Send in: `it.next(value)` passes a value back into the generator.
- Stop early: `it.return(finalValue)`; inject error: `it.throw(error)`.

