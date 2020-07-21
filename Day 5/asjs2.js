// console.log('sidn');

class User
{
    constructor(name, age,email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.coin=0;
        this.course=[];
    }
    login() {
        console.log(`${this.name} logged in`);
    }
    logout() {
    console.log(`${this.name} logged out`);
}
add() {
    this.coin++;
    console.log(`${this.name} has ${this.coin} coins`);
}
}

class Moderator extends User {

    add() {
        this.coin++;
        console.log(`${this.name} has ${this.coin} coins`);
    }

}
class Admin extends Moderator {
addcourse(user,course)
{
    user.course.push(course);
}
deletecourse(user,course){

    use=use.filter(p=>{
        return p.course!=course;
    })


        
}
}
let user = new User('rio',21,'r@gmail.com');
// let user1 = new User('rioraj',24,'rr@gmail.com');
// print login
// user.login('rio',21,'r@gmail.com');
// print logout
// user.logout(('rio',21,'r@gmail.com'));
let Mod= new Moderator('rio',21,'r@gmail.com');
// print no of coins user have
// Mod.add(user);
let use=[user];
// Mod.add(user);
let ad=new Admin('rio',21,'r@gmail.com');
ad.addcourse(user,'java');

// ad.deletecourse(user,'java');
console.log(`${user.name} is applied for ${user.course} course`);
use.forEach(r=> {console.log(r)});