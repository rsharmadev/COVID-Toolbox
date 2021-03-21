const { Data } = require('./data.js');
const { News } = require('./news.js');
const path = require('path');
const express = require("express");
const app = express();


var htmlPath = path.join(__dirname, 'public');
app.use(express.static(htmlPath));

app.get('/api/graphData', async (req, res) => {
    const Task = new Data();
    const data = await Task.getData();
    res.send(JSON.stringify(data));
});
app.get('/api/newsData', async (req, res) => {
    const Task = new News();
    const data = await Task.grabNews();
    res.send(JSON.stringify(data));
});

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:${3000}`);
})