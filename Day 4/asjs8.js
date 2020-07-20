
console.log("jer");

// function ask(que,yes,no)
// {
//     if(confirm(que))
//     {yes();}
//     else{
//         no();
//     }
// }
// ask("do you agree?",
//     function(){alert("you are agreed");},
//     function(){alert("you canceled");
//     });

let que1=(q,y,n)=>{
    if(confirm(q))
    {y();}
    else
    {n();}
}
que1("is that",function(){alert("you are agreed")},function(){alert("you canceled")});

