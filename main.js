const { Data } = require('./data.js');
const { News } = require('./news.js');
const { ScheduleMT, ScheduleChecker, StopSchedule } = require('./scheduler.js');
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
    res.send(JSON.stringify({
        status: "started"
    }))
});
app.post('/api/checkSchedule', async (req, res) => {
    console.log(req.body)
    const Task = new ScheduleChecker(req.body)
    var status = await Task.check();
    res.send(JSON.stringify(status));
});
app.post('/api/stopSchedule', async (req, res) => {
    const Task = new StopSchedule(req.body)
    var status = Task.stopTask();
    res.send(JSON.stringify({
        status: "stopped"
    }));
});
app.listen(80, () => {
    console.log(`Example app listening at http://localhost:${80}`);
})