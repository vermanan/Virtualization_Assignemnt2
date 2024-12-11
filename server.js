const express = require('express'); 
const app = express(); 
 
const PORT = process.env.PORT || 3000; 
 
app.get('/', (req, res) => { 
    res.send('Hello, Nancy Dockerized Node.js App!'); 
}); 
 
app.listen(PORT, () => { 
    console.log(`App running on http://localhost:${PORT}`); 
}); 