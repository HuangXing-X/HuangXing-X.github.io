var express=require ("express");
var app =express();
app.use(express.static("partice"));

app.get("/getdata",function(req,res){
	res.send("hello")
})

app.get("/add",function(req,res){
	var zoo=["bears","kangaroos","penguins"];
	res.send(zoo);
})

app.listen(3000,function(){
	console.log("服务器已经启动......");
}) 