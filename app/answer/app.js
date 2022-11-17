const express = require('express'),
        router = express.Router(),
        app = express();

const host = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
    res.type('text/plain')
    return res.send('Any data')
  })

app.get('/', (req, res) => {
    res.end()
    return res.redirect(301, './login'), res.json({ message: 'ok' })
})

app.get('/image', (req, res) => {
    return res.status(200).download('assets/images/crol.jpg')
})

app.get('/', (req, res) => {
    res.status(200) 
    return res.send({ message: 'ok' }) 
})

app.listen(port, host, () => console.log(`Server listens http://${host}:${port}`));