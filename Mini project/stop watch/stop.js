// console.log('dfvj');
const test=document.getElementById('test');
const btns=document.getElementById('btns');
const btnp=document.getElementById('btnp');
const btnr=document.getElementById('btnr');
const txts=document.getElementById('txts');
const txtm=document.getElementById('txtm');
const txth=document.getElementById('txth');
const txtms=document.getElementById('txtms');

var int,int1;
let check=0;
let tmin,thr,tsec;
var min,i,hr,msec;
let t=false;

btnp.disabled=true;
btnr.disabled=true;


function start()
{
    min=document.getElementById('txtm').value;
hr=document.getElementById('txth').value;

let sec=document.getElementById('txts').value;
i=sec;

j=txtms.value;
console.log(j);
int1=setInterval(function()
{

    if(j==0)
    {
        
            j=100;

    }
    else{
        txtms.value=j;
    }
    j--;


},1)
    
    // console.log(sec)
   
    // console.log(sec)

    int=setInterval(() => {
        
        if(i==0)
        {
            txts.value=i;
            // console.log(min)
            
            if(min == 0 && i == 0 && hr==0 )
            {
                j=0;
                if(j==0)
                {
                    clearInterval(int1);
                    txtms.value = "00";
                }
                clearInterval(int);
                txts.value="00";
                txtm.value="00";
                txth.value="00";
                
            }
            else{
                i=60;
                txts.value=i;
            }
             
             
             if(min==0)
             {
                txtm.value=min;
                // console.log(sec);
                if(hr==0)
                {

                    txth.value=hr;
                }
                else {
                    hr--;
                    min=60;
                    txtm.value=min;
                    txth.value=hr;
                }
             }
             else
             {
                 min--;
                 txtm.value=min;

             }
             
            //  min--;
            //  txtm.value=min;
        }
        else {
            // console.log(i);
            txts.value=i;
            
        }
        i--;
        
    }, 1000);

    btnr.disabled=false;
    btns.disabled = true;
    btnp.disabled = false;
}

function pauseone(tsec,tmin,thr,tmsec)
{
    min=tmin;
    hr=thr;
    i=tsec;

    j=tmsec;
    // console.log(j);
    int1=setInterval(function()
    {
     
    
        
        
        if(j==0)
        {
           
            j=100;
        }
        
        
        else{
            txtms.value=j;
        }
        j--;
    
    
    },1)

    int=setInterval(() => {
        
        if(i==0)
        {
            // txts.value=i;
            // console.log(min)
            
            if(min == 0 && i == 0 && hr==0)
            {
                j=0;
                if(j==0)
                {
                    clearInterval(int1);
                    txtms.value="00"
                }
                clearInterval(int);
                txts.value="00";
                txtm.value="00";
                txth.value="00";
            }
            else{
                i=60;
                txts.value=i;
            }
             
             
             if(min==0)
             {
                txtm.value=min;
                // console.log(sec);
                if(hr==0)
                {

                    txth.value=hr;
                }
                else {
                    hr--;
                    min=60;
                    txtm.value=min;
                    txth.value=hr;
                }
             }
             else
             {
                 min--;
                 txtm.value=min;

             }

        }
        else {
            // console.log(i);
            txts.value=i;
            
        }
        i--;
        
    }, 1000);

    return min,i,hr;
}


function pause() {
    tsec=i;
    tmin=min;
    thr=hr;
    tmsec=j;
    
    // console.log(tsec)
    // console.log(tmin)
    // console.log(thr)

    if(btnp.innerText == 'Pause')
    {
        btnp.innerHTML='Resume';
    }
    else {
        btnp.innerHTML='Pause';
    }
    if(t)
    {
        // console.log(t)
        clearInterval(int);
        clearInterval(int1);
    // pauseone(tsec,tmin,thr);
    }
    else
    {
        console.log(t)
        pauseone(tsec,tmin,thr,tmsec);
    }
}
function reset()
{
    clearInterval(int);
    txts.value='00';
    txtm.value='00';
    txth.value='00';
    txtms.value='00';
    btnp.innerHTML='Pause';
    btns.disabled = false;
    btnp.disabled=false;

}


btns.addEventListener('click',start,false);
btnp.addEventListener('click',pause,false);
btnr.addEventListener('click',reset,false);




