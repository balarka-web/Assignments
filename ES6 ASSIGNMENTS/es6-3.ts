//1

function add (x , y) {
    let p = new Promise(function (resolve, reject) {
       if (x >= 0 && y >= 0) {
          //do some complex time consuming work
          resolve(x + y)
       }
       else
          reject('NOT_Postive_Number_Passed') 
       })
       return p;
 }
 add(10, 20)



 //2
 class classAccount{
    id: number
    cust_name: string
    balance: number
    constructor(id, cust_name, balance){
        this.id = id
        this.cust_name =cust_name
        this.balance = balance
    }
}

class SavingAccount extends classAccount{
    interest: number
    cash_credit: number
    constructor(id, cust_name, balance, cash_credit){
        super(id, cust_name, balance)
        this.interest = 0.12
        this.cash_credit = cash_credit
    }

    total_balance(): number{
        this.balance += this.cash_credit + (this.cash_credit*this.interest)
        return this.balance
    }
}

class currentAccount extends classAccount{
    interest: number
    cash_credit: number
    constructor(id, cust_name, balance, cash_credit){
        super(id, cust_name, balance)
        this.interest = 0.1
        this.cash_credit = cash_credit
    }

    total_balance(): number{
        this.balance += this.cash_credit + (this.cash_credit*this.interest)
        return this.balance
    }
}

let sobj = new SavingAccount(1, "balarka", 0, 1200)
let cobj = new currentAccount(1, "a", 0,  1500)

let s_balance = sobj.total_balance()
let c_balance = cobj.total_balance()

console.log("Saving Account balance = ", s_balance, "Current Account balance = ", c_balance)

let sobj1 = new SavingAccount(2, "xyz", s_balance, 2000)
let cobj1 = new currentAccount(2, "pqr", c_balance, 5000)

let s_balance1 = sobj1.total_balance()
let c_balance1 = cobj1.total_balance()

console.log("Saving Account balance = ", s_balance1, "Current Account balance = ", c_balance1)



//3


interface Printable{
    fname:string,
    lname:string
}
/*let printAll=(type:Printable):void=>{
    console.log(type.fname + "circle" +type.lname)
}*/

let Circle:Printable={
    fname:"circle",
    lname:"one"
}
let employee:Printable={
    fname:"balarka",
    lname:"a",
}
function printAll(){
    function print(a){
        console.log(a);
    }
for(var i in arguments){
print(arguments[i]);
}
}
print(Circle,employee);