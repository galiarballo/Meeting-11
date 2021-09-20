const express = require('express'); 
const app = express(); 

app.get('/',  (req, res) => { 
    res.send('Acá probando esta weá :D'); 
}); 

app.get('/hola',  (req, res) => { 
    res.send('Hola mundo'); 
}); 

app.get('/chau', (req, res) => { 
    res.send('Chau mundo'); 
});

app.get('/phones', (req, res) => { 
    let arr = [1, {numero: 2, titulo: "Hola"},3]
    res.json(arr);
});
    


app.listen(3000, () => { 
    console.log('Servidor iniciado en puerto 3000!'); 
});
