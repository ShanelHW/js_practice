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
//     }
//     feels() {
//         //adds ability to emote
//         feelings = [happy, sad, confused, angry, amused];
//     }
//     walk(){
//         let isWalking = true;
//         let isSitting = false;
//     }
//     sits(){
//         let isWalking = false;
//         let isSitting = true;
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
//         constructor(name, age, gender, height, weight){
//         super(name, age, gender, height, weight)
//         this.jobTitle = `Postal Worker`;}
//     sortsMail(mail) {
//         console.log(mail.sort())
//     }
//     deliversPackages(mail){
//         (mail.weight >= 3) ? console.log(`Delivers ${mail.id} to mailbox`) : console.log(`Delivers ${mail.id} to door`)
//     }

// }
// class Chef extends Person{
//  constructor(name, age, gender, height, weight){
// super(name, age, gender, height, weight)
// this.jobTitle = `Chef`;}
//     cooks(food) {
//         console.log(`Order Up`);
//     }
//     preps(ingredient){
//         (ingredient) ? console.log(`${jobTitle} prepares ${ingredient} for lunch`) : console.log(`${ingredient} is out of stock. Unable to prepare`);
//     }
// }


// let PW1 = new PostalWorker(`Peach`, 28, `F`, 5, 120);
// let PW2 = new PostalWorker(`Yoshi`, 18, `M`, 3, 110);

// console.log(PW1);
// console.log(PW2);

// let prepCook = new Chef(`Doc`, 54, `M`, `5'9`, 180);

// let lineCook = new Chef(`Lemon`, 22, `F`, `5'1`, 160);

// console.log(prepCook);
// console.log(lineCook);



//Hungry for More
class BankAccount{
    constructor(){
    ownerName = ``;
    balance = 0;
    acctNum = `123456` + Math.random()*1000; 
    }
    deposit(amount){
        balance += amount;
    }
    withdraw(amount){
        if (balance >= 0) {
            balance -= amount;
        } else {
            console.log('Insufficient Funds')
        }
    }
    checkBal(){
        console.log(this.balance);
    }
}
console.log(BankAccount)

class checkingAccount extends BankAccount{
constructor(){
super(ownerName, balance, acctNum)
 acctType = 'basic'
}
overdraftEnabled = true;
withdraw(amount){
    if (balance >= 0) {
        balance -= amount;
    } else if(balance <= 0 && overdraftEnabled) {
        balance -= amount;
        console.log('Overdraft protection used for withdrawl of ${amount}')
    }else {
        console.log('Insufficient funds')
    }
}
}
class savingsAccount extends BankAccount{
    constructor(){
        super(ownerName, balance, acctNum)
         acctType = 'interest accruing'
        }
        withdraw(amount){
                console.log(`Unable to process withdrawl for Savings Account ${acctNum}. Please contact your branch`)
            }
        }

// class moneyMarketAccount extends BankAccount{
//     constructor(){
//         super(ownerName, balance, acctNum)
//          acctType = 'interest accruing'
//         }
// }