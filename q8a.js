var express=require('express');
var app=express();

var middleware=function(req,res,next){
	var date=new Date();
	var timestamp=date.toUTCString();
	console.log(timestamp);
	next();
}

app.use(middleware);

app.get("/",function(req,res){
	res.send("<h1>Welcome</h1>");
	var fullUrl=req.protocol+"://"+req.get('host')+req.originalUrl;
	console.log(fullUrl);
})

app.get("/page1",function(req,res){
	res.send("<h1>Page 1</h1>");
	var fullUrl=req.protocol+"://"+req.get('host')+req.originalUrl;
	console.log(fullUrl);
})

app.listen(5000);