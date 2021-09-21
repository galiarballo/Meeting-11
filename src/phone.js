const express = require('express'); 
const morgan = require('morgan');
const app = express(); 

app.use(morgan('dev'));

app.get('/',  (req, res) => { 
    res.send('Probando distintos endpoints'); 
}); 

app.listen(3000, () => { 
    console.log('Servidor iniciado en puerto 3000!'); 
});

// esto es para obtener las variables por post
app.use( express.json() );       // to support JSON-encoded bodies
app.use(express.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

let CellphoneList = [];

class Cellphone {
    constructor(brand,range,model,screenSize,OS,price){
		this.brand  = brand;
		this.range   = range;
		this.model = model;
		this.screenSize = screenSize;
		this.OS = OS;
		this.price   = price;
	}

	getCost(){
		return this.price;
	}
}

CellphoneList.push(new Cellphone ("Apple", "alta", "Iphone 12 Pro Max", "5,8'", "iOS", 368000 ));
CellphoneList.push(new Cellphone ("Xiaomi", "media", "Redmi Note 10", "6,5'", "Android 11", 43000 ));
CellphoneList.push(new Cellphone ("Samsung", "alta", "Galaxy S21", "6,2'", "Android 11", 133995 ));
CellphoneList.push(new Cellphone ("Motorola", "baja", "E7", "6,5'", "Android 10", 22000 ));


app.get('/phones/list', (req, res) => { 
    res.json(CellphoneList);
});


app.get('/phones/list-mitad', (req, res) =>{
	let cantidad = CellphoneList.length;
	cantidad = Math.ceil(cantidad / 2);
	res.json(CellphoneList.slice(0, cantidad));
});


app.get('/phones/low-price', (req, res) =>{
	
	let cellLowPrice = 999999999999999;
	let CellphoneLow;

	for (let i=0; i< CellphoneList.length; i++) {
		if (CellphoneList[i].price < cellLowPrice) {
			cellLowPrice = CellphoneList[i].price;
			CellphoneLow = CellphoneList[i];
		}
	}

	res.json(CellphoneLow);
});



app.get('/phones/high-price', (req, res) =>{
	
	let cellHighPrice = 0;
	let cellphoneHigh;

	for (let i=0; i< CellphoneList.length; i++) {
		if (CellphoneList[i].price > cellHighPrice) {
			cellHighPrice = CellphoneList[i].price;
			cellphoneHigh = CellphoneList[i];
		}
	}

	res.json(cellphoneHigh);
});


app.get('/phones/list-ranges', (req, res) =>{
	
    let lowEndModels = [];
    let highEndModels = [];
    let midRangeModels = [];

	CellphoneList.forEach(function(Cellphone) {
		if (Cellphone.range == "baja") {
			lowEndModels.push(Cellphone);
		}
	});

	CellphoneList.forEach(function(Cellphone) {
		if (Cellphone.range == "media") {
			midRangeModels.push(Cellphone);
		}
	});

	CellphoneList.forEach(function(Cellphone) {
		if (Cellphone.range == "alta") {
			highEndModels.push(Cellphone);
		}
	});

	res.json({baja: lowEndModels, media: midRangeModels, alta: highEndModels});
});
