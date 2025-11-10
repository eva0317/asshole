// function sum(a, b) {
//     return(String(a + b));
// }

// // let answer = sum(1, 2);
// // console.log(answer);
// // console.log(typeof(answer));

// // The answer is 3 and the type is string. 
// console.log(`The answer is ${sum(1, 2)} and the type is ${typeof(sum(1, 2))}.`);


let b = [ "Hello" , "Jason", "Leong", "Cake", "Amen", "Append"]; 
let c = [];

// for (let i = 0; i < b.length; i++) {
//     c.push(b[i][0] + b[i][b[i].length - 1]);
// }   

// console.log(c);

c.push(b.length % 2 === 0 ? b[(b.length/2) - 1][Math.floor(b[(b.length/2) - 1].length/2)] : b[Math.floor(b.length/2)]);

c.push(1);
c.push(2);
c.push(3);


c.length = 0;



console.log(c);