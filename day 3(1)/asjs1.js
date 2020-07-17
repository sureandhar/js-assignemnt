// console.log('hello');
let inp = prompt("Enter a number",0);
// console.log(inp);
if (inp!=null)
{
let res= (inp==0) ? "neither odd nor even":((inp%2) == 0) ? "even" :"odd";
console.log(`The number entered is ${inp} and Number is ${res}`);
}
else{
    console.log(`Entered an invalid number`);
}
