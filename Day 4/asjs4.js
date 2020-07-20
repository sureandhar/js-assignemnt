console.log(1+2);
// let s;
// alert("Enter a number to add, sub, multiply, division with space");
// let n=prompt('Number1(space)Number2(space)operator(0-add 1-sub 2-mul 3-div )',0)
// console.log(Number(n));

// if(Number(n)==0)
// {
//     console.log('No values entered to calculate');
//     alert('No values entered to calculate');
    
// }
// else{




// m1=n[0];
// console.log(m1);
// m2=n[2];
// console.log(m2);
// let o=n[4];
// console.log(o);
// let n1=Number(m1);
// let n2=Number(m2);
// function add(n1,n2)
// {
//     s=n1+n2;
//     return s;
// }
// function sub(n1,n2)
// {
//     s=n1-n2;
//     return s;
// }
// function mul(n1,n2)

// {
//     s=n1*n2;
//     return s;
// }
// function div(n1,n2)
// {
//     s=n1/n2;
//     return s;
// }
// switch(Number(o))
// {
//     case 1:
//         {
//             console.log(
//             `substraction of ${n1} and ${n2} is ${sub(n1,n2)}`);  
//         }
//     case 2:
//         {
//             console.log(`multiplication of ${n1} and ${n2} is ${mul(n1,n2)}`);
//         }
//     case 3:
//         {
//             console.log(`division of ${n1} and ${n2} is ${div(n1,n2)}`);
//         }
//     default:
//         console.log(`addition of ${n1} and ${n2} is ${add(n1,n2)}`);


// }
// }
var v;


function number(val)
{

    document.getElementById("input").value+=val;

}
function find()
{
    var a=document.getElementById("input").value;
    var b=eval(a);
    // console.log(a,b);

    document.getElementById("input").value=b;

}
function root()
{
    var a=document.getElementById("input").value;
    let i=Math.sqrt(a);
    document.getElementById("input").value = i;

    

}
function c()
{
    document.getElementById("input").value = "";
    // console.log(a,b);

}
