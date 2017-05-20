var stack=[]
function push(elem){
	stack.push(elem);
	stack.push(elem+1);
	console.log("Stack : "+stack);
}

function pop(){
	var n=stack.pop();
	if(n!=null){
		console.log(n+" popped");
		console.log("Stack is :"+stack);
	}
	else
		console.log("Stack is empty");
}

module.exports.push=push
module.exports.pop=pop
