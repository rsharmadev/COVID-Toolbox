const { Data } = require('./data.js');
const { News } = require('./news.js');
const { ScheduleMT, ScheduleChecker } = require('./scheduler.js');
const path = require('path');
const express = require("express");
const app = express();


var htmlPath = path.join(__dirname, 'public');
app.use(express.static(htmlPath));
app.use(express.json());
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
app.post('/api/newSchedule', async (req, res) => {
    const Task = new ScheduleMT(req.body)
    Task.monitor();
});
app.post('/api/checkSchedule', async (req, res) => {
    const Task = new ScheduleChecker(req.body)
    Task.monitor();
});
app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:${3000}`);
})