import { createServer } from 'http'

export const app = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({data: 'Hello'}));
});