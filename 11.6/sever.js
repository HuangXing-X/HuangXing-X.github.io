var express=require ("express");
var app=express();
app.use(express.static("public"));

app.get("/getdata",function(req,res){
	res.send("hi~");
})
//点击按钮显示。。后台。。

app.get("/list",function(req,res){
	var data=["orange","pear","waterpower"];
	res.send(data);
})
//后台添加数组 在前台显示数据		



app.listen(80,function(){
	console.log("服务器已启动......");
});