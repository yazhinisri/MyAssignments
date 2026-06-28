//1. Named Function
function userProfile(name){
    console.log(`Hello ${name}`)

}
userProfile("Yazhini")

//2. Arrow Function
let double=(a)=>(a+a)
console.log(double(5))

//3.Anonymous Function

const setTimeout=function(){
    console.log("This message is delied by 2 seconds");
}
setTimeout()

//3.callback Function
function setTimeout(){
   // page.waitForTimeout(3000);
    console.log("This message is delied by 2 seconds")
}

function callbackfun(){
    console.log("Call back function")
}
function getUserData(callbackfun){

    setTimeout();
    callbackfun();
}
getUserData(callbackfun);
