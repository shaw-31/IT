function isAutomorphic(num){
	var n,l,zero_append,divisor; 
	n=num*num;
	l=num.toString().length;
	zero_append='1';
	//console.log("l="+l);
	for(var i=0;i<l;i++){
		zero_append+='0';
	}
	//console.log(zero_append);
	divisor=parseInt(zero_append);
	n=n%divisor;
	if(n==num){
		return 1
	}
	else{
		return 0
	}
}
module.exports.isAutomorphic=isAutomorphic