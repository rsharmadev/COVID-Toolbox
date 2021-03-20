const csv = require('csvtojson');
const got = require('got');


class Data {
    constructor() {
        this.data = [];
        this.labels = [];
    }
    async getData() {
        var response = await got.get('https://state-of-maryland.github.io/VaccineDashboardGraphs/Data/VaccinationsDaily.csv', {
            headers: {
                'user-agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
                'x-forwarded-for': '66.249.66.1',
            }
        });
        // console.log(response.body);
        const jsonObj = await csv().fromString(response.body);
        // console.log(jsonObj.slice(-7));
        let json = jsonObj.slice(-7);
        for(var i=0; i<json.length; i++) {
            this.data.push(json[i]['CompletedVaxCumulative']);
            this.labels.push(json[i]['VACCINATION_DATE']);
        };

        return {labels: this.labels, data: this.data};
    };
}

module.exports = {
    Data: Data
}

/*

const Task = new Data();

(async () => {
    const thing = await Task.getData();
    console.log(thing);
})();

*/