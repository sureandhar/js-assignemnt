console.log('skdn')
const us=document.getElementById('tab');
const us1=document.getElementById('clock');
// const a=prompt("Enter your name");


const bt=document.getElementById('dark');




let a='raj';


// console.log(us1);
us.innerHTML=`Welcome to this page ${a}!!!`;

function tr()
{
let date = new Date();
let t= date.toLocaleTimeString();
// console.log(t)
us1.innerHTML=t;
}
setInterval(tr,1000);

// console.log(bt)
const fe=document.getElementById('try')
// console.log(fe);
bt.onclick=function tr()
{
    
// document.body.style.backgroundColor="black";
// document.body.style.color = "white";

fe.classList.toggle("dark");
if(bt.innerHTML=="dark mode")
{
    bt.innerHTML="turn off dark mode";
}
else {
        bt.innerHTML="dark mode";
    }

}


// const dmode = document.getElementById('dark');
// console.log(dmode)

// dmode.onclick = function changeColor(){
    
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//     document.body.style.fontFamily = 'Helvetica';
   
// }



