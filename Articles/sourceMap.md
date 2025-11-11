## Source Maps - https://www.polarsignals.com/blog/posts/2025/11/04/javascript-source-maps-internals

### What Problem Do They Solve?
When you build a web app, the code you write often gets transformed before it runs in the browser:
- bundled into one big file
- minified so it downloads faster
- converted from TypeScript (or newer JavaScript) to plain JavaScript

After these steps, the original code structure is lost. If something breaks, the browser might show an error in `bundle.min.js:1:27698`, which is almost impossible to read. A **source map** reconnects that error to the original file and line you wrote.

### Quick Definition
A **source map** is an extra file that acts like a translation guide between the transformed code that runs in the browser and your original source code. With it, developer tools can display and debug the code you actually wrote.

### The TypeScript Build Pipeline
Modern JavaScript builds typically involve three main stages:
- **Transpilation:** TypeScript → JavaScript
- **Bundling:** Combining modules into a single file
- **Minification:** Compressing code for production

### TypeScript Isn’t What the Browser Understands
Browsers only run JavaScript, not TypeScript. TypeScript gives you features such as types, interfaces, and more modern syntax, but everything must be converted to plain JavaScript before it can execute. This translation process is called **transpilation**.

```
TypeScript → (transpile) → JavaScript
```

### Why TypeScript Builds Need Source Maps
Once TypeScript is transpiled and then bundled or minified, the JavaScript that runs in the browser looks different from the code you wrote:
- Line numbers can shift.
- Variable and function names might be renamed.
- Multiple files can be merged together or simplified.

Because of these differences, a source map is essential. It links the generated JavaScript back to your original TypeScript, so debugging stays easy and human-friendly.

### What Is JSON?
Source maps are stored as `.map` files using **JSON (JavaScript Object Notation)**. JSON is a lightweight text format for storing and sharing structured data. It looks like JavaScript objects (`{ "key": "value" }`) and is easy for both humans and machines to read.

### What Lives Inside a Source Map?
- The name of the final bundled file (for example, `bundle.js`)
- A list of the original source files (like `main.ts`, `app.js`)
- The original names of variables and functions
- A special `mappings` section that says "this spot in `bundle.js` came from that spot in `app.js`"

### How Do Mappings Work?
The `mappings` section is a long string made up of letters, numbers, and commas. It compresses the location data so the file stays small. Browsers and debugging tools know how to decode this string automatically, so you rarely need to read it yourself.

### Why Are Source Maps Helpful?
- They let you debug in DevTools using your original files.
- Error messages and stack traces point to the right file and line number.
- Performance and profiling tools can show meaningful function names.

### Things to Keep in Mind
- Avoid publishing source maps with production code if you want to keep your source private—they can reveal your original code.
- They add one more file to your build output, but the debugging benefits usually outweigh the small size increase.

### In a Nutshell
Source maps translate the optimized, hard-to-read code that ships to the browser back into the clean, readable code you wrote, so debugging feels familiar and fast.