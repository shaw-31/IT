function isArm(num){
var b,z,c=0;
z=num;
while(z>0)
{
b=z%10;
c=c+(b*b*b);
z=parseInt(z/10);
}
if(num==c)
	return 1;
else
	return 0;
}

module.exports.isArm=isArm