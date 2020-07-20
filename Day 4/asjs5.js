console.log('efr');
let inp=prompt("enter an sales amount",0);
inp=Number(inp);
var a;

function check(inp)
{
    
if(inp>0 && inp<=5000)
{
    a=inp/100;
    a=a*2;
    // console.log(a);


}
else if(inp > 5000 && inp<=10000)
{
    
    let c=inp-5000;
    a=(5000*0.02)+(c*0.05);
    // console.log(a);


}
else if(inp>10000 && inp<20000)
{
    let d=inp-10000;
    a=(5000*0.02)+(5000*0.05)+(d*0.07);
    // console.log(a);

}
else
{
    a=inp/100;
    a=a*10;
    // console.log(a);

}
// console.log(a);


return a;
}

console.log(`your sales amount is ${inp} and reward is ${check(inp)}`);