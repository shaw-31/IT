const fibo=require('./q5a_module_fib.js');
const arm=require('./q5a_module_arm.js');
var f=3;
var a=153;
console.log(fibo.nthFibo(f)+" is the "+(f+1)+"th Fibonacci number");
if(arm.isArm(a)){
	console.log(a+" is an Armstrong number");
}
else{
	console.log(a+" is not an Armstrong number");
}