const app = require('express')();
const https = require('https');
const http = require('http');
const next = require('next');
const fs = require('fs');
const path = require('path');

const HTTPS = true;
const server = HTTPS
    ? https.createServer(
        {
            key: fs.readFileSync(path.resolve(__dirname, './certificates/key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, './certificates/certificate.pem')),
            ca: fs.readFileSync(path.resolve(__dirname, './certificates/cloudflare.pem')),
        },
        app
    )
    : http.createServer({}, app);

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
    app.get('/api/something', (req, res) => {
        res.json({});
    });

    // ...

    app.get('*', (req, res) => {
        return nextHandler(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http${HTTPS ? 's' : ''}://localhost:${port}`);
    });
});
