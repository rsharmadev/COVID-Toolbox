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

        var response2 = await got.get('https://state-of-maryland.github.io/VaccineDashboardGraphs/Data/DailyVaccineData_PercentPop.csv', {
            headers: {
                'user-agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
                'x-forwarded-for': '66.249.66.1',
            }
        });


        // console.log(response.body);
        const jsonObj = await csv().fromString(response.body);
        const jsonObj2 = await csv().fromString(response2.body);
        // console.log(jsonObj.slice(-7));
        let json = jsonObj.slice(-7);
        for(var i=0; i<json.length; i++) {
            this.data.push(json[i]['CompletedVaxCumulative']);
            this.labels.push(json[i]['VACCINATION_DATE']);
        };
        
        /*
        let counties = {
            Allegany: { lat: 39.6255251, lng: -78.6114999 },
            'Anne Arundel': { lat: 38.9530109, lng: -76.5488232 },
            Baltimore: { lat: 39.2903848, lng: -76.6121893 },
            'Baltimore City': { lat: 39.2903848, lng: -76.6121893 },
            Calvert: { lat: 38.49495030000001, lng: -76.5025742 },
            Caroline: { lat: 38.9105018, lng: -75.8533954 },
            Carroll: { lat: 39.5423418, lng: -77.0564464 },
            Cecil: { lat: 39.5739403, lng: -75.94632399999999 },
            Charles: { lat: 38.5221781, lng: -77.10249019999999 },
            Dorchester: { lat: 38.4152819, lng: -76.17837390000001 },
            Frederick: { lat: 39.41426879999999, lng: -77.4105409 },
            Garrett: { lat: 39.5681243, lng: -79.29021329999999 },
            Harford: { lat: 39.5838964, lng: -76.3637285 },
            Howard: { lat: 39.2873463, lng: -76.964306 },
            Kent: { lat: 39.2713804, lng: -76.1319953 },
            Montgomery: { lat: 39.1547426, lng: -77.2405153 },
            "Prince George's": { lat: 38.78492110000001, lng: -76.8720961 },
            "Queen Anne's": { lat: 39.0263572, lng: -76.1319953 },
            "St. Mary's": { lat: 38.1060259, lng: -76.3637285 },
            Somerset: { lat: 38.9659438, lng: -77.0960893 },
            Talbot: { lat: 38.7803973, lng: -76.1319953 },
            Washington: { lat: 39.641762, lng: -77.719993 },
            Wicomico: { lat: 38.3941813, lng: -75.667356 },
            Worcester: { lat: 38.1584227, lng: -75.4344727 }
        };

        let a = [];
        for(const [key, value] of Object.entries(counties)) {
          console.log(key, value)
          a.push(`new google.maps.LatLng${(parseInt(value['lat']), value['long'])}`);
          // a.push({location: new google.maps.LatLng(parseInt(value['lat']), parseInt(value['long'])), weight: 0.5})
        };

        console.log(a);
        
        */

        return {
            data1: {
                labels: this.labels, 
                data: this.data
            },
            data2: {
                data: jsonObj2
            }
    };
} }



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