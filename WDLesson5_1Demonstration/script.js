//Use the Console in the Developer's Tool of the browser to view the output

//Example 1: Display "I can do this!" 10 times.
console.log("Example 1")
for(let i = 0; i < 10; i += 1 ){
  console.log("I can do this!");
}

//Example 2: Display the even numbers from 2 to 20
console.log("Example 2")
for(let i = 2; i <= 20; i += 2){
  console.log(i);
}

//Example 3: Display 6 random numbers from 1 to 48
//Resource: Look at the section about JavaScript Random Integer from the following link: https://www.w3schools.com/js/js_random.asp
console.log("Example 3");
for(let i = 0; i < 6; i+=1){
  let num = Math.floor( Math.random()*(48-1+1) + 1 );
  console.log(num);
}


/*Example 4: Display all the numbers from 1 to 10 along with their squares.
For example,
1 squared is 1
2 squared is 4
3 squared is 9
and so on
*/
console.log("Example 4")
for(let i = 0; i <= 10; i += 1 ){
  let squared = i ** 2;
  console.log(`${i} squared is ${squared}`);
}