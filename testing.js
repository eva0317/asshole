// function sum(a, b) {
//     return(String(a + b));
// }

// // let answer = sum(1, 2);
// // console.log(answer);
// // console.log(typeof(answer));

// // The answer is 3 and the type is string. 
// console.log(`The answer is ${sum(1, 2)} and the type is ${typeof(sum(1, 2))}.`);


// let b = [ "Hello" , "Jason", "Leong", "Cake", "Amen", "Append"]; 
// let c = [];

// for (let i = 0; i < b.length; i++) {
//     c.push(b[i][0] + b[i][b[i].length - 1]);
// }   

// console.log(c);

// c.push(b.length % 2 === 0 ? b[(b.length/2) - 1][Math.floor(b[(b.length/2) - 1].length/2)] : b[Math.floor(b.length/2)]);

// c.push(1);
// c.push(2);
// c.push(3);


// c.length = 0;



// console.log(c);



// let random = [ 1, 2, 3];
// let random1 = [10, 20, 30];

// function multiply(aa) {
//     let newarr = [];
//     for (let i =0; i < aa.length; i++) {
//         newarr.push(aa[i]*2);
//     }
//     return newarr;
// }

// let result = multiply(random);
// console.log(result);

// let result1= multiply(random1);
// console.log(result1);

// let num1 = 1;
// let num2 = 2;

// let n1 = 1;
// let n2 = 2;

// let p1 = 10;
// let p2 = 20;

// let random5 = ['sdfafasd','dsfgstsvsg','dfvsrvsgsdfg','dfgrgesvfs','dfaervdgdfg','dfvgrsdgdsg'];
// let x = random5[0].length;

// for (let i = 1; i<random5.length; i++) {
//     if (i % 2 === 0) {
//         x-= random5[i].length;
//     } else {
//         x += random5[i].length;
//     }
// }

// console.log(x);

// function add(p) {
//     let r = 0;
//     for (let i=0; i<p.length; i++) {
//         r = r + p[i];
//         console.log(r)
//     }
//     return r;
// }

// let result = add(random5);
// console.log(result);



// console.log(num1 + num2);


let b = [ 1, 3, 5, 6, 8, 9, 10, 11, 12];
let c = 0;

let middle = Math.floor(b.length/2);

for (let i = 0; i <= middle; i++){
    if (i == middle) {
        if (b.length % 2 === 0){
            break;
        } else {
            c += b[i];
            break; 
        }
    };
    if (i % 2 === 0) {
        c += b[i] + b[b.length - i - 1];
    } else {
        c -= (b[i] + b[b.length - i - 1]);
    }
}

console.log(c);





