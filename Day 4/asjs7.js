// console.log('hdjf');
let limt=prompt("Enter a number between 2 to n");
var inp=0;
// limt=Number(limt);
// console.log(limt);
var w=2;
var a=1;

if(Number(limt)==0)
{
    alert("you have not entered any number");

}
else
{
    console.log(`Prime numbers between ${limt} is`);
while(w<Number(limt))
{
    ++a;
let y= Math.sqrt(a);
// console.log(Math.round(y));
let c=Math.round(y);

for(let i=2;i<=c;i++)
{
    if(a%i==0)
    {
        // console.log('even');
         var p=0;
        break;

    }
    else
    {
        var p=1;
        // console.log('odd '+inp);
    }
}
if(p==0)
{
    // console.log(`${a}not a prime`)
}
else{
    
    console.log(` ${a}`);
}
w++;
}
}

// console.log(Number(y));