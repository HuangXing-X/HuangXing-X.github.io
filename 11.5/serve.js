var express=require("express");
//定义 引入外部模块 express
var app=express();
app.use(express.static("public"));
//制作静态页面
app.get("/index",function(req,res){
	res.send("yoho~");
})


app.get("/getUsername",function(req,res){
	var name=req.query.username;
	//获取username
	var str="我是"+name;
	res.send("str");
})


// app.post("/checkuser",function(req,res){
// 	res.send("登陆成功");
// })
//登陆验证

app.get("/checkuser",function(req,res){
	var username=req.query.username;
	var password=req.query.password;
	if(username==="abc"&&password==="123"){
		res.send("登陆成功");
	}else{
		res.send("登陆失败");
	}
})
//模拟登陆

app.listen(1000,function(){
	console.log("服务器已经启动......")
})