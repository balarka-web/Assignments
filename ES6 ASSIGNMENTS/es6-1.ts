//1
const a = 5
console.log(a)

//2
if(true)
{
    let x = 5
    console.log(x)
}

//3
var Order = { 
    id: 1,
     title: "The Order",
      price: 200 
    }
function printOrder(){
    console.log(Order)
}
function getPrice(){
    console.log(Order.price)
}
var new_Order = Object.assign( {}, Order )
printOrder()
getPrice()
console.log("New Object", new_Order)


//4
let fourth = (str) =>{
    let str_name = ["name", "length"]
    let str_length = []
    for(let j = 0;j < str.length;j ++){
        let temp = []
        temp[0] = str[j]
        temp[1] = str[j].length
        str_length[j] = temp
    }

    let data = []
    data[0] = str_name
    for(let i = 0;i < 3;i ++){
        data[i+1] = str_length[i]
    }

    var keys = data.shift(),
        i = 0, k = 0,
        obj = null,
        output = [];

    for (i = 0; i < data.length; i++) {
        obj = {};

        for (k = 0; k < keys.length; k++) {
            obj[keys[k]] = data[i][k];
        }

        output.push(obj);
    }
    console.log("Output = ", output)
}
let str = ["Tom", "Ivan", "Jerry"]
fourth(str)

//5 a
let add = (a = 2, b = 3) =>{
    console.log(a + b)
}
add() //default parameter
add(3) //optional parameter


//b

function userFriends(username, ...listOfFriends){ //rest parameter
    console.log("Username = ", username)
    console.log("List of Friends = ", listOfFriends)
}
userFriends("balarka", "b", "efg", "hij")


//c
function printCapitalNames(a, b, c, d, e){
    console.log(a.toUpperCase(), b.toUpperCase(), c.toUpperCase(), d.toUpperCase(), e.toUpperCase())
}
let small_name = ["balarka", "balu", "abc", "xyz", "ifj"]
printCapitalNames(...small_name) //spread parameter


//6
let laptop = {
    model: "hp",
    desk_no: 12,
    name: "balarka"
}

console.log(`Hi, I am ${laptop.name}! \n my Model is ${laptop.model} and Desk No. is ${laptop.desk_no}`)

//7  a
var array = [1, 2, 3, 4]
var [first, second, third] = array
console.log(third)

//7 b
let organization={
    name:"balarka",
    address:{
        dno:"1",
        city:"vijayawada",
        state:"AP",
        pincode:"000001"
}
}
console.log(organization.address.pincode)


//8
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

let sobj1 = new SavingAccount(2, "reb", s_balance, 2000)
let cobj1 = new currentAccount(2, "axy", c_balance, 5000)

let s_balance1 = sobj1.total_balance()
let c_balance1 = cobj1.total_balance()

console.log("Saving Account balance = ", s_balance1, "Current Account balance = ", c_balance1)