// console.log('sdf');
let limit=prompt("Enter the positive integer");

let b = 1;
let c=[];
while(b<=Number(limit))
{
    // console.log("valu"+b);
    c.push(b);
    b++;
}
console.log(c);
//applying filter for c array store in variable x
let x=[];
x=c.filter((c)=>c%2!=0)
console.log("Filtered array \n"+x)
let y=c.filter((c)=>c%2!=0).map((c=>c**3))
console.log("cube of the filtered array \n"+y);
