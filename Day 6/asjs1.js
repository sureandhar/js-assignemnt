console.log('jsndvj')



const col=['black', 'gray','green', 'blue'];

// console.log(Math.floor(Math.random()*(3-0)+1))
// const at=document.querySelector('#txt');
// const at1=document.getElementById('txt');
// console.log(at1)
// at.innerText+='white';
// console.log(at);
// document.getElementById("txt").innerHTML = "New text!";
const ctime = document.getElementById('txt');
function rclr() {

let rnd=Math.floor(Math.random()*(3-0)+1);
document.body.style.backgroundColor=col[rnd];
ctime.innerText=`Color is ${col[rnd]}`;

console.log(col[rnd]);
// console.log(at.getAttribute('id'));
}
setInterval(rclr,1000)

