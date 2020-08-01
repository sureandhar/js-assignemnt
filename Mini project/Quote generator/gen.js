console.log('isdn');
const array=[{quote:"Be yourself; everyone else is already taken.",author:"Oscar Wilde "},{quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",author: "Albert Einstein"},{quote: "So many books, so little time.",author: "Frank Zappa "},{quote: "A room without books is like a body without a soul.",author: " Marcus Tullius Cicero"},{quote: "You only live once, but if you do it right, once is enough.",author: "Mae West "},{quote: "Be the change that you wish to see in the world.",author: "Mahatma Gandhi "},{quote: "In three words I can sum up everything I've learned about life: it goes on.",author: " Robert Frost "},{quote: "If you tell the truth, you don't have to remember anything.",author: "Mark Twain "},{quote: "A friend is someone who knows all about you and still loves you.",author: "Elbert Hubbard "}]

const btn=document.getElementById('btn');
const body=document.getElementById('body');
const quotee=document.getElementById('quote');
const authorr=document.getElementById('author');

// console.log(array[0].quote);

// let n=Math.random()*10;
// console.log(n)
// console.log(Math.floor( n))
// console.log(Math.ceil( n))
btn.addEventListener('click',()=>{
    let rnd=Math.floor(Math.random()*9);
    // console.log(rnd)
    // console.log(array[rnd].quote);
    // console.log(array[rnd].author);
    
    quotee.innerHTML=`" ${array[rnd].quote} "`;
    authorr.innerHTML=`- ${array[rnd].author}`;
    
})
