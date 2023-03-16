const express = require('express')
const app = express()

app.get('/sse', async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
    });
// Send a "hello" event to the client immediately
    res.write('event: hello\n');
    res.write('data: Welcome to the SSE stream!\n\n');
    const timer = setInterval(async () => {
        const event = {
            id: Date.now(),
            data: `Server time: ${new Date().toLocaleTimeString()}`,
        };
        res.write(`id: ${event.id}\n`);
        res.write(`data: ${event.data}\n\n`);
    }, 30000);

    // End the response when the client closes the connection
    req.on('close', () => {
        clearInterval(timer);
        res.end();
    });
});



app.listen(3000, () => console.log('Server started on port 3000'))