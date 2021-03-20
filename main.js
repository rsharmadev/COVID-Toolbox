const { Data } = require('./data.js');
const express = require("express");
const app = express();

app.get('/api/graphData', async (req, res) => {
    const Task = new Data();
    const data = await Task.getData();
    res.send(JSON.stringify(data))
});
app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:${3000}`)
})