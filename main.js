const { Data } = require('./data.js');
const { News } = require('./news.js');
const express = require("express");
const app = express();

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
app.get('/', async (req, res) => {
    res.sendFile('C:/Users/kprsh/Documents/GitHub/mocohacks2021/b.html');
});
app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:${3000}`);
})