const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    if(req.url === '/' && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/plain');
        res.write('<html>');
        res.write('<head><title>Form Example</title></head>');
        res.write('<body>');
        res.write('<h1>Submit a Form</h1>');
        res.write('<form action="/submit" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter your username" required>');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } else if(req.url.toLowerCase === '/submit' && req.method === 'POST') {
        fs.writeFile('formData.txt', 'Form submitted successfully!', (err) => {
            if(err) {
                console.error('Error writing to file', err);
                res.statusCode = 500;
                return res.end('Internal Server Error');
            }
            res.setHeader('Location', '/');
            res.statusCode = 302;
            return res.end();
        });
    }
    
    res.end('Page not found');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});