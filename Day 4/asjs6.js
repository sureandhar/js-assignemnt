console.log('hfj');
// let u=prompt("Enter a number");
let i=0;


while(i<1000)
{
    
 

    u=prompt("Enter a number greater than 100");
    u=Number(u);
    if(u>100 || u==0)
    {
        console.log(u);
        alert("you have entered number greater than 100!! or cancelled a loop");
        break;
    }else{
        console.log(i);
        console.log(u);
        i++;
    }

    
    
}

