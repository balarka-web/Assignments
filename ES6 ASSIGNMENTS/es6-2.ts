//1

const next = Symbol();
class Fibonacci{
    previousNo:number 
    currentNo:number
    value:number

    constructor(){
        this.previousNo=0;
        this.currentNo=1;
    }
    [next](){
        this.value = this.previousNo+this.currentNo  
        this.previousNo = this.currentNo
        this.currentNo = this.value

        return this.value
    }
    
}

let obj = new Fibonacci()
console.log(obj.previousNo);
console.log(obj.currentNo);
console.log(obj[next]())
console.log(obj[next]())
console.log(obj[next]())
console.log(obj[next]())

//2

function getnextArmstrong(){
    let i=1
    const nextArmNum= {
        next:function(){
        let numberOfDigits=i.toString().length;
        let sum=0;
        let temp=i
        while(temp>0){
            let remainder=temp%10
            sum+=remainder** numberOfDigits;
            temp=Math.floor(temp/10)
        }
        if(sum==i){
            i++;
            return {
                value:sum,done:false
                }
        }
        else{
            i++;
            return {value:undefined,done:true
            }
        }
        }
    }
        return nextArmNum;
    }




//3


function isArmstrong3(num){
    let sum=0
    let temp=num;
    const len= String(temp).split("").length;
    while(temp > 0){
        let remainder=temp % 10;
        sum += Math.pow(remainder,len)
        temp = Math.floor(temp/10);
    }
    if(sum==num)
        return true;
    else
        return false;
}
let nums=0;
function reset(){
    nums=0;
    return nums;
}

function getnextArmstrong1(){
    while(nums<10001){
        if(nums<1000){
            nums++;
            if(isArmstrong3(nums))
                return nums;
            else{
                reset();
                return "Number is above 1000";
            }
        }
    }
}

console.log(getnextArmstrong1());




//4


const chatroom1 = new Map();
chatroom1.set('u1', 'Hi');
chatroom1.set('u2', 'hello');
chatroom1.set('u3', 'bye');
console.log(chatroom1);

const chatroom2 = new Map();
chatroom2.set('usr1', 'Wher r u ?');
chatroom2.set('usr2', 'Whar r u doing');
chatroom2.set('usr3', 'Good!');
console.log(chatroom2);

function allUsers(chatroomName){
    chatroomName.forEach((value, key) => {
        console.log(`${key}`)
      })
}

function allMessages(chatroomName){
    chatroomName.forEach((value,key) => {
        console.log(`${value}`)
      })
}

allUsers(chatroom1);
allMessages(chatroom1);

allUsers(chatroom2);
allMessages(chatroom2);