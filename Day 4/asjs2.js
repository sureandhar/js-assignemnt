// console.log(1+2);
const student={
    name:"tree",
    Age:21,
    project:{
        dice:"javascript project"
    }
}
// destructuring
const {name,age,project:{dice}} = student;
console.log(dice);