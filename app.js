var express = require("express");
var app= express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var sehirler = ["Istanbul", "Izmir", "Ankara", "Mersin", "Yozgat"];
console.log(sehirler);

app.get("/",function(req,res){
	res.render("home");
});

app.get("/sehirler", function(req,res){
	res.render("sehirler",{sehirler : sehirler});
});

app.post("/sehirEkle",function(req,res){
	var yeniSehir = req.body.yenisehir;
	sehirler.push(yeniSehir);
	console.log(sehirler);
	res.redirect("/sehirler");
});

var server = app.listen(3000, function(){
	console.log("Sunucu Portu : %d ",server.address().port);	
});