const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Welcome to the Home Page</h1>');
    } else if(req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>About Us</h1><p>This is the about page.</p>');
    } else if(req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Contact Us</h1><p>This is the contact page.</p>');
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>Page Not Found</h1><p>The requested page was not found.</p>');

    }
    res.write(~
        `<html>
            <head>
                <title>Node.js Practice</title>
            </head>
            <body>
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            </body>
        </html>`
    );
    // res.end();
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});