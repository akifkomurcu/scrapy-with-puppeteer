const express = require('express');
const app = express();
const veri = require('./data');
const port = 3000;


app.get('/', (req, res) => {
    // console.log((async () => await res.send(veri.scrape))())
    veri.scrape().then((data) => {
        res.send(data)
    })
});


app.listen(port, () => {

    console.log(port, "dinleniyor")
})