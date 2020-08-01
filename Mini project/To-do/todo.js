// console.log('isdn');
const body=document.querySelector('.main');
const btn=document.getElementById('btn');
const input = document.getElementById('input');
const note = document.getElementById('note');
const heading = document.getElementById('heading');
const btnn = document.getElementById('btnn');


let val=(window.localStorage.getItem('value'));
console.log(val)
if(val==null)
{
    var i=0;
}
else {
    i=val;
}
var j=0;

btn.addEventListener('click',function()
{
    
    let div=document.createElement('div');
    div.innerHTML=`${input.value} `;
    div.classList=`one${j++}`;
    window.localStorage.setItem(`name${i++}`, input.value);
    window.localStorage.setItem('value', i);
    div.setAttribute("style",'border: 2px solid rgb(189, 180, 180); border-radius: 10px;\
    position:relative;\
    color:black;\
    font-size: 25px;\
    font-family: Arial, Helvetica, sans-serif;\
    width:250px;\
    height:50px;\
    margin:10px;\
    padding:10px;\
    background-color: white;')
    body.appendChild(div);
    // clear the input field
    input.value="";
    // create button for each div
    let bt=document.createElement('button');
    bt.setAttribute("style",'border-radius:5px;\
    position:absolute;\
    left:280px;\
    font-size: 25px;\
    padding:10px;\
    top:-5px;');
    bt.innerHTML="Remove";
    let b=`btn${j++}`;
    bt.classList=b;
    bt.id=b;
    div.appendChild(bt);
    let c=document.getElementById(b);
    // add eventlistner to button
    c.addEventListener('click',function()
    {
        // console.log(c);
        let t=confirm("confirm completed");
        if(t==true)
        {
            c.parentNode.remove();
            // to remove item from localstorage using key
            window.localStorage.removeItem(`name${i}`);
        }
        else{
            // alert("you cancelled");
        }
    })
})
// display stored list using getitem
for(let i=0;i<=val;i++)
{
    let res=window.localStorage.getItem(`name${i}`);
    if(res==null)
    {
        const l=1;
    }
    else {
    let div=document.createElement('div');
    div.innerHTML=`${res}`;
    div.classList=`one${j++}`;
    div.setAttribute("style",'border: 2px solid rgb(189, 180, 180); border-radius: 10px;\
    font-family: Arial, Helvetica, sans-serif;\
    position:relative;\
    color:black;\
    font-size: 25px;\
    width:250px;\
    height:50px;\
    margin:10px;\
    padding:10px;\
    background-color: white;')
    body.appendChild(div);  

    input.value="";
    let bt=document.createElement('button');
    bt.setAttribute("style",'border-radius:5px;\
    position:absolute;\
    left:280px;\
    padding:10px;\
    font-size: 25px;\
    top:-5px;');
    
    bt.innerHTML="Remove";
    let b=`btn${j++}`;
    bt.classList='b';
    bt.id=b;
    div.appendChild(bt);

    let c=document.getElementById(b);

    c.addEventListener('click',function()
    {
        localStorage.removeItem("key");

        let t=confirm("confirm completed");
        if(t==true)
        {
            c.parentNode.remove();
            let del=window.localStorage.getItem(`name${i}`);
            
            console.log(del);
            window.localStorage.removeItem(`name${i}`);
            console.log(`name${i}`);
            
               }
        else{
            // alert("you cancelled");
        }
        // console.log(lastname)
        
        // console.log(t);
        // c.parentNode.remove();
    })
}
    
}
// button to clear all the list
btnn.addEventListener('click',function()
{
    let v=confirm("click ok to clear the list");
    if(v==true)
    {
        // syntax for clear the storage
        window.localStorage.clear();
        location.reload(true);
    }
    
})

// window.localStorage.clear();