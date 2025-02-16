const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const filepath = path.join(__dirname, 'eka.html');
        fs.readFile(filepath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/html'});
                res.end(data);  
            }
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain'});
        res.end('Not Found');
    }

    
});


server.listen(PORT, () => {
    console.log(`Palvelin käynnissä osoitteessa http://localhost:${PORT}`);
});