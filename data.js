const csv = require('csvtojson');
const filePath = 'VaccinationsDaily.csv';
let data = [];
let labels = [];

async function getData() {
    const jsonObj = await csv().fromFile(filePath);
    // console.log(jsonObj.slice(-7));
    json = jsonObj.slice(-7);
    for(item in json) {
        data.push(json[item]['CompletedVaxCumulative']);
        labels.push(json[item]['VACCINATION_DATE']);
    };

    console.log(data, labels);
};

getData();