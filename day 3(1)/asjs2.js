// console.log('hello');
let inp=prompt(`Enter OS name and version with space`,'windows 10');
let get=inp.split(' ');
// console.log(get);
if (get.length==2)
{
console.log(`The OS name is ${get[0].toUpperCase()} and version is ${get[1]}`);
}
else
{
console.log('Enter a valid OS name and version');
}