var q=[];
function insert(elem){
	q.push(elem);
	console.log("Queue : "+q);
}

function dequeue(){
	if(q.length!=0){
		console.log(q.shift() +" removed");
		console.log("The queue is : "+q);
	}
	else{
		console.log("Empty queue");
	}
}

module.exports.insert=insert
module.exports.dequeue=dequeue