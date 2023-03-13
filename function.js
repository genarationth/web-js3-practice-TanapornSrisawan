// ## Create function following below :</br>
// add(a, b)</br>
// subtract(a, b)</br>
// multiply(a, b)</br>
// divide(a, b)</br>

const cal = (a,b) => {
    const add = a+b;  
    const subtract = a-b;
    const multiply = a*b;
    const divide = a/b;
    console.log('Add = ' + add) ;
    console.log('Subtract = ' + subtract) ;
    console.log('Multiply = ' + multiply) ;
    console.log('Divide = ' + divide) ;
}
cal(10,5);


// ## -----another exercise Create Function Inform---</br>
// console.log("Hi, my name is " + firstName + "I live in " + location + "and enjoy "+hobby);

const inform = (firstName,location,hobby) => {
    console.log("Hi, my name is " + firstName + ". I live in " + location + " and enjoy "+hobby);
};
inform('Ribbin','Vancouve','eating');
