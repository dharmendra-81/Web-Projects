const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/plain');
    // res.write('Hello, this is a response from the server!');
    if(req.url === '/') {
    res.write('<html>');
    res.write('<head><title>Response Example</title></head>');
    res.write('<body><h1>Hello, this is a response from the server!</h1></body>');
    res.write('</html>');
    return res.end();
    } else if(req.url === '/products') {
    res.write('<html>');
    res.write('<head><title>Products</title></head>');
    res.write('<body><h1>Products</h1></body>');
    res.write('</html>');
    res.end();
    } 
    res.end('Page not found');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});