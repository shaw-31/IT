function isPalin(n){
	var num,s,r;	
	num=n;
	s=0;
	while(n!=0)
	{
		r=n%10;
		n=(n-r)/10;	
		s=(10*s)+r;
	}
	if(num==s)
		return 1;
	else
		return 0;
}

module.exports.isPalin=isPalin