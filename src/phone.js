const express = require('express'); 
const app = express(); 

app.get('/',  (req, res) => { 
    res.send('Acá probando esta weá :D'); 
}); 

app.get('/phones', (req, res) => { 
    let arr = [{marca: 'Apple', gama: 'alta', modelo: 'Iphone 12 Pro Max' , pantalla: '5,8"', SO: 'iOS', Precio: '$368.000'},
    {marca: 'Xiaomi', gama: 'media', modelo: 'Redmi Note 10' , pantalla: '6,5"', SO: 'Android 11', Precio: '$43.000'},
    {marca: 'Samsung', gama: 'alta', modelo: 'Galaxy S21' , pantalla: '6,2"', SO: 'Android 11', Precio: '$133.995'}]

    res.json(arr);
});
  

app.listen(3000, () => { 
    console.log('Servidor iniciado en puerto 3000!'); 
});