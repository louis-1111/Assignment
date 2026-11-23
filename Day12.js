

console.log("Task-1-------");
let a = Number(prompt("Enter a number-1 "));
let b = Number(prompt("Enter a number-2 "));

console.log("Arithmatic operators");

console.log( a +" + " + b + " =" , a+b);
console.log( a +" - " + b + " =" , a-b);
console.log( a +" / " + b + " =" , a/b);
console.log( a +" % " + b + " =" , a%b);
console.log( a +" ** " + b + " =" , a**b);
console.log("a++ =", a++, " new value of a =", a);
console.log("b-- =", b--, " new value of b =", b);

console.log("Task-2---------");

let c=10;
c=10+5;
c=c-3;
c=c*2;
c=c/4;
console.log("final value = " + c);

console.log("Task-3----------");

let x=Number(prompt("enter the value of x"));
let y=Number(prompt("enter the value of y"));

console.log(x==y);
console.log(x===y);
console.log(x<y);
console.log(x>y);
console.log(x>=y);
console.log(x<=y);

console.log("Task-4--------");

let d=4;
let e=5;
if(d<=e && d!=e ){
    console.log("true")
}
else {
    console.log("false");
}
if(x<=e || x==e){
    console.log("True");

}
else{
    console.log("false");
}

console.log("Reversed a:", !a); 
console.log("Reversed b:", !b);

console.log("Task-5--------")

let age =20;
let result=(age %2 ===0 ? ' Odd' : 'Even');
console.log(result);

console.log("Task-6-------");

let basic=Number(prompt("Enter your Salary"));

let hra = basic * 20 /100;
let da = basic *10 /100;

let gsalary= basic;
gsalary += hra;
gsalary  -= da;

let tax= gsalary * 8/100;
let netsalary = gsalary;
netsalary -=tax;

console.log("basic salary" , basic);
console.log("HRA 20% ", hra);
console.log("DA 10%" , da);
console.log("Gsalary", gsalary);
console.log("Tax 8%", tax);
console.log("net Salary", netsalary);

console.log("Task-7-------");

let mark=Number(prompt("enter the Mark"));
if(mark>=90 && mark <=100)
{
    console.log("A");
}
else if (mark >=75 && mark<=89){
    console.log("B");

}
else if( mark>=50 && mark <=74 ) {
    console.log("C");

}
else{
    console.log("Fail");
}

console.log("Task-8-------");

let storeduname="admin";
let storedpword="admin";

let username=prompt("enter the username");
let passsword=prompt("enter the password");


if(username===storeduname && passsword===storedpword ){
    console.log( "Login Successful");
}
else{
    console.log("username or password is wrong")
}

console.log("Task-9----------");

let unit = Number(prompt("Enter the unit"));
let rate = 0;

if (unit < 0 || Number.isNaN(unit)) {
  console.log("Invalid unit input");
} else if (unit <= 100) {
  rate = 5;
} else if (unit <= 200) {
  rate = 7;
} else {
  rate = 10;
}

if (rate > 0) {
  let billAmount = unit * rate;
  console.log("Units Consumed:", unit);
  console.log("Rate per Unit: ₹" + rate);
  console.log("Total Bill: ₹" + billAmount);
}

console.log("Task-10----------");

let amount = Number(prompt("Enter purchase amount (in ₹):"));
let isPremium = prompt("Are you a premium member? (yes/no)").toLowerCase() === "yes";

let status = (amount > 5000 && isPremium) ? "Discount Applied" : "No Discount";
console.log(status);




