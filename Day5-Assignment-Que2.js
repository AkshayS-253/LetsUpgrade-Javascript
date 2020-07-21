/*Question2*/

class User{
    constructor(name, age, email){
          this.name = name;
          this.age = age;
          this.email = email;
          this.lucoins = 0;
          this.courses = [];
    }

    login(){
          console.log(`${this.name} has logged in`);
          return this;
    }
    logout(){
          console.log(`${this.name} has logged out`);
          return this;
    }
}

class Moderator extends User{
    addCoins(user, lucoins){
          this.lucoins++;
          console.log(`${this.name} has ${this.lucoins} coins`);
          return this;
    }
    removeCoins(user, lucoins){
          this.lucoins--;
          console.log(`${this.name} has ${this.lucoins} coins`);
          return this;
    }
}

class Admin extends Moderator{
    addcourse(user,course){
          user.courses.push(course);
          console.log(user);
    }
    removecourse(user,course){
          user.courses.pop(course);
          console.log(user);
    }

}


let user1 = new User('Tom',24,'tom@gmail.com')
let user2 = new User('Marry',30,'marry@yahoo.in')
let mod = new Moderator('Narendra',35,'narendra@gmail.com')
let admin = new Admin('Akshay',25,'akshay@gmail.com')
let users = [user1, user2,mod,admin];

users.forEach(element => {
    console.log(element);
});

user2.login()
user1.logout()
mod.addCoins(user1, 5);
mod.addCoins(user1, 2);
mod.removeCoins(user1, 1);
admin.addcourse(user1,'Python, Javascript, Php');
admin.addcourse(user1,'Data Science, ML');
admin.addcourse(user2,'Javascript, Python');
admin.removecourse(user1,'ML');