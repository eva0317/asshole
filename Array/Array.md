# 🔢 Array Methods Quick Reference

## 🧩 At a Glance
| Action     | Methods / Patterns           |
| ---------- | ---------------------------- |
| Add        | `push`, `unshift`            |
| Remove     | `pop`, `shift`, `splice`     |
| Check      | `includes`, `indexOf`        |
| Loop       | `for`, `for...of`, `forEach` |
| Transform  | `map`, `filter`, `reduce`    |
| Copy       | `slice`, `[...arr]`          |
| Sort       | `sort`, `reverse`            |

## 🧠 Common Methods by Category
| Category     | Method        | What it does                                         |
| ------------ | ------------- | ---------------------------------------------------- |
| Access/Find  | `indexOf()`   | Finds the index of an item                           |
|              | `includes()`  | Checks if an item exists                             |
|              | `find()`      | Returns the first item matching a condition          |
|              | `findIndex()` | Returns the index of the first match                 |
| Transform    | `map()`       | Creates a new array by transforming each item        |
|              | `filter()`    | Keeps only items passing a condition                 |
|              | `reduce()`    | Reduces the array to a single value (e.g. a sum)     |
| Join / Split | `join()`      | Converts the array to a string                       |
|              | `toString()`  | Similar to `join` with commas                        |
| Sorting      | `sort()`      | Sorts the array (default alphabetical)               |
|              | `reverse()`   | Reverses the order                                   |
| Combine      | `concat()`    | Merges arrays                                        |
|              | `[...arr]`    | Spread syntax for easy merging                       |
| Others       | `slice()`     | Copies a portion of the array (non-destructive)      |
|              | `flat()`      | Flattens nested arrays                               |

## 🔹 Remove Items
| Method   | Example                          | What it does                    |
| -------- | -------------------------------- | -------------------------------- |
| `pop()`  | `arr.pop()`                      | Removes the last item            |
| `shift()`| `arr.shift()`                    | Removes the first item           |
| `splice()`| `arr.splice(start, deleteCount)`| Removes specific items           |

## 🔹 Add Items
| Method     | Example                        | What it does        |
| ---------- | ------------------------------ | -------------------- |
| `push()`   | `arr.push("item")`             | Adds to the end      |
| `unshift()`| `arr.unshift("item")`          | Adds to the start    |

## ✏️ Quick Examples

```javascript
const numbers = [1, 2, 3];

numbers.push(4);            // [1, 2, 3, 4]
numbers.shift();            // [2, 3, 4]

const doubled = numbers.map(n => n * 2);   // [4, 6, 8]
const evens = numbers.filter(n => n % 2 === 0); // [2]

const sum = numbers.reduce((total, n) => total + n, 0); // 9
const hasThree = numbers.includes(3); // true

const copy = numbers.slice();         // [2, 3, 4]
const merged = [...numbers, ...doubled]; // [2, 3, 4, 4, 6, 8]
```