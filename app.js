const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/texture', function (req, res) {
    res.sendFile(__dirname + '/static/textures/NormalMap.png');
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})