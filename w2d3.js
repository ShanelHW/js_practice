// class Governor {
// //static methods and properties. skip for now
// }

// class Person{
//     constructor(name, age, gender, height, weight){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.height = height;
//         this.weight = weight;
//         this.feelings = feelings;
//     }
//     feels() {
//         feelings = [happy, sad, confused, angry, amused];
//     }
//     walk(){
//         let isWalking = true;
//     }
//     lives(){
//         let isAlive = true;
//     }
//     works(){
//         let isWorking = true;
//     }
// }
// console.log(Person)


// class PostalWorker extends Person{
        // constructor(name, age, gender, height, weight){
        //super(name, age, gender, height, weight)
        // this.jobTitle = `Postal Worker`;
        //     sortsMail(mail) {
//         console.log(mail.sort())
//     }
//     deliversPackages(mail){
//         (package.weight >= 3) ? console.log(`Delivers ${package.id} to mailbox`) : console.log(`Delivers ${package.id} to door`)
//     }
// }
//}
// class Chef extends Person{
 // constructor(name, age, gender, height, weight){
//super(name, age, gender, height, weight)
// this.jobTitle = `Chef`;
//     cooks(food) {
//         console.log(`Order Up`);
//     }
//     preps(ingredient){
//         (ingredient) ? console.log(`${jobTitle} prepares ${ingredient} for lunch`) : console.log(`${ingredient} is out of stock. Unable to prepare`);
//     }
// }
//}

// let PW1 = new PostalWorker;
// let PW2 = new PostalWorker;

// let prepCook = new Chef;
// let lineCook = new Chef;

//Hungry for More

class BankAccount{
    constructor(){
    ownerName = ``;
    balance = 0;
    acctNum = `123456` + Math.random()*1000; 
    }
}
console.log(BankAccount)

class checkingAccount extends BankAccount{

}
class savingsAccount extends BankAccount{
    
}
class moneyMarketAccount extends BankAccount{
    
}