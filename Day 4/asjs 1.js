//console.log('hello')

let i,s;
for(i=1;i<=100;i++)
{

    let d=0;
    if(i%3==0)
    {
        s=i;
        //console.log(i);
        if(i%5==0 && i%3==0)
        {
            // console.log('fizbuzz ' + i);
            d=1;
        }
        // console.log("fiz " +i);
    }
   

    if(d==1)
    {
        console.log('fizzbuzz ' +i);
    }
    else{
        if(i%3==0)
        {
            console.log('fizz ' +i)
        }

        if(i%5==0)
        {
            console.log('buzz ' +i)

        }

    }

    
}


