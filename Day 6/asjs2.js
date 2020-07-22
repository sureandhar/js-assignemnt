console.log('sd')


const tabl=document.getElementById('tab');
console.log(tabl);
const p=prompt("Enter table number you want")
var a=p;


function tables()
{
    let b=1;
while (b<=20)
{
    tabl.innerHTML+=` ${a} x ${b} = ${a*b} <br> `;
    console.log(`${a} X ${b} = ${a*b}`);
    b++;
}
}
// setTimeout(tables(),1000)
tables();