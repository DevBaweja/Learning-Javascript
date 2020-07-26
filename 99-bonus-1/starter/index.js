// Accessing file system

// Node have access to all powerful module
/*
// Absolute path
const path = require('path');
console.log(path.resolve(__dirname,' '));
*/
// We can also use another module from npm

// Core node module
// File system

const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');

// It will return buffer if character coding is not defined
// We need file so we specify character coding

// console.log(__dirname);
// console.log(json);

// json - javascript object n otation

const Data = JSON.parse(json);
// console.log(Data);

const server = http.createServer((req, res) => {
    // console.log('Someone access the server');

    // Routing
    // Respond differently for different url
    const requrl = url.parse(req.url, true);
    const pathName = requrl.pathname;
    // console.log(pathName);
    const id = requrl.query.id;

    // PRODUCTS OVERVIEW
    if (pathName === '/products' || pathName === '/') {
        res.writeHead(200, { 'Content-type': 'text/html' });

        fs.readFile(`${__dirname}/template/template-overview.html`, 'utf-8', (err, overview) => {
            fs.readFile(`${__dirname}/template/template-card.html`, 'utf-8', (err, card) => {
                /*
                let cards = Data.reduce((cards,laptop) => {
                    cards += replaceTemplate(card,laptop)
                    return cards;
                },'');
                */
                const cards = Data.map(laptop => replaceTemplate(card, laptop)).join(' ');
                // console.log(cards);
                const output = overview.replace(/{%CARDS%}/g, cards);
                res.end(`${output}`);
            });
        });
    }
    // LAPTOP DETAIL
    else if (pathName === '/laptop' && id && id < Data.length) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        // Sync version is blocking
        // Non sync version have callback function
        fs.readFile(`${__dirname}/template/template-laptop.html`, 'utf-8', (err, data) => {
            const laptop = Data[id];
            const output = replaceTemplate(data, laptop);
            res.end(`${output}`);
        });
    }
    // IMAGES
    else if (/\.(jpg|jpeg|png|gif)$/i.test(pathName)) {
        fs.readFile(`${__dirname}/data/img${pathName}`, (err, data) => {
            res.writeHead(200, { 'Content-type': 'image/jpg' });
            res.end(data);
        });
    }
    // URL NOT FOUND
    else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.end(`<h1>URL not found on server</h1>`);
    }
    // Express to handle routing
});

server.listen(1337, '127.0.0.1', () => {
    console.log('Listening for request now');
});

const replaceTemplate = (originalHtml, laptop) => {
    let output = originalHtml.replace(/{%PRODUCTNAME%}/g, laptop.productName);
    output = output.replace(/{%IMAGE%}/g, `${laptop.image}`);
    output = output.replace(/{%PRICE%}/g, laptop.price);
    output = output.replace(/{%SCREEN%}/g, laptop.screen);
    output = output.replace(/{%CPU%}/g, laptop.cpu);
    output = output.replace(/{%STORAGE%}/g, laptop.storage);
    output = output.replace(/{%RAM%}/g, laptop.ram);
    output = output.replace(/{%DESCRIPTION%}/g, laptop.description);

    output = output.replace(/{%ID%}/g, laptop.id);
    // Template engines in express
    return output;
};
