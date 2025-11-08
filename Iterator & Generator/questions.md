# Iterator & Generator Questions

## 1. What is an Iterator?

- What does an iterator do?
- How does it work behind the scenes in loops (for...of)?
- How do we manually create one using [Symbol.iterator] and .next()?
- What does { value, done } mean?
- When should we use an iterator manually?

## 2. What is a Generator?

- What makes a generator different from a normal function?
- What does the function* syntax mean?
- What does the yield keyword do?
- How do we pause and resume a generator?
- Why is "every generator an iterator, but not every iterator a generator"?

## 3. Iterator vs Generator

| Feature | Iterator | Generator |
|---------|----------|-----------|
| Definition | Object that gives values one by one | Function that creates an iterator |
| How to create | Manually define .next() | Use function* and yield |
| Control flow | Only .next() | Can yield, return, throw |
| Use case | Custom looping logic | Easier async/lazy sequence creation |
| Built-in example | Array [Symbol.iterator]() | Custom function* |

## 4. When to Use a Generator

- When you need to pause and resume a process
- When you work with large or infinite data (lazy loading)
- When you want to create custom iterators easily
- When fetching data in parts (async generators)
- When writing step-by-step logic or animations

## 5. Examples

- Basic iterator example with .next()
- Basic generator example using yield
- Infinite sequence generator
- Async generator fetching paginated data
- Comparison using for...of loop

## 6. Quick Summary

- **Iterator** = manual stepper through data
- **Generator** = function that builds an iterator automatically
- Use generators when you want lazy, controllable, or stepwise execution
