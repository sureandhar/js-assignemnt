console.log('Conditional');
let inp=prompt("Enter a mark",0);
// conditional + ternary
let res;
//ternary
let v;
let get = (inp!=null) ? `${Number(inp)>101 ? 'Enter a valid integer i.e mark does not  exists 100':check(inp)}`:'does not provide any info';
function check(inp)
{
inp = Number(inp);
// if(inp<=100)
// {
if(inp>=0 && inp<=35)
{
    res="C";
    v=1;
}
else if(inp>35 && inp<=50)
{
    res="B";
    v=2;
}
else if(inp>50 && inp<=75)
{
    res="A";
    v=3;
}
else{
    res='A+';
    v=4;
}
let m=`Marks are ${inp} and grade is ${res}`;
return m;
}
// else{
//     console.log('Enter a valid integer i.e mark dows not exists 100');
// }

// }
console.log(get);
console.log('switch');
// switch
let res1;

switch(v)
{
    case 1:
        res1='C';
        console.log(`Marks are ${inp} and grade is ${res1}`);

        break;
    case 2:
        res1='B';
        console.log(`Marks are ${inp} and grade is ${res1}`);
        break;
    case 3:
        res1='A';
        console.log(`Marks are ${inp} and grade is ${res1}`);
        break;
    default:
        res1='A+';
        console.log(`Marks are ${inp} and grade is ${res1}`);

}