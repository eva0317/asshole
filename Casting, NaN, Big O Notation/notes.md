***Casting***

var a = "1";

console.log(typeof(a));

var b = Number(a); **explicit casting(it has to be called by a function to change the value from a "1" to a number)** 
console.log(typeof(b));

console.log(a == b);

console.log(1 == "1"); **implicit casting(changes value behind the scene)** 
console.log("1" === 1); **NO implicit casting(it is a strict quality that compares both value and type as it is. no type conversion)**

=============================================================================================================================================================

**The "1" + 1 = 11 theory**

console.log("1" + 1); **11**
**In "1" + 1, the + operator prioritizes strings — it converts everything to a string for concatenation. This design exists because JavaScript was meant to make web scripting easier, and strings are common in that context** 

**Concatenation means joining two or more things together, usually strings (text).**

=============================================================================================================================================================

***NaN(Not a Number)***

**Nan can never be define as a number in any case**
console.log(Number("")); **0**
console.log(String(NaN)); **NaN**
console.log(isNaN(324234324));**false**
console.log(isNaN("asdfadsfdsafdsafdsaf"));**true**
console.log(isNaN(NaN));**true**
console.log(isNaN(false));**true**
console.log(isNaN(0));**false**
console.log(isNaN(true));**false**
console.log(isNaN(""));**false**

=============================================================================================================================================================

**for loop & if statement in a palindrome**

function test(){

    var s = "amanaplanacanalpanama";

    for(let i = 0; i < s.length; i++){
        if (s[i] != s[s.length-i -1]){
            return false;
        }
        if (i >= s.length - i -1){
            return true;
        }
    }
    return true;
}

console.log(test());

    
0 == 10 - 0 - 1 (0 == 9)
1 == 10 - 1 - 1 (1 == 8)
2 == 10 -2 - 1 (2 == 7)
3 == 10 - 3 - 1(3 == 6)
4 == 10 - 4 - 1 (4 == 5)
5 == 10 - 5 - 1(5 == 4)


=============================================================================================================================================================

***Big O Notation***

var a = [1, 5, 4, 3, 2, 10,9,0,100,99,98,97];

for (let i=0; i<a.length; i++) {
    
    if (a[i] == 100) {
        console.log("FOUND");
    }
}


y = constant

y = log(n)

y = n

n*log(n)

y = 2*n
y = 3n

y = n**2 (if n is 10 y = 100)

y = n**3

y = n!

y = n**n(if n is 10 y = 10000000000)

======================================================================================================================================================================


