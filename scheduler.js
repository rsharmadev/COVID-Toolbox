const got = require("got");
const { CookieJar } = require("tough-cookie");
let enabled = false;
class ScheduleMT {
    constructor(info) {
        this.info = info;
    }
    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async monitor() {
        console.log("Starting Monitor for M&T Bank Stadium...")
        while(true) {
            this.cookieJar = new CookieJar();
            var response1 = await got.get("https://signupandschedule.umm.edu/mychart/SignUpAndSchedule/EmbeddedSchedule?id=RES^84002860&VT=22759", {
                headers: {
                    'user-agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
                    'x-forwarded-for': '66.249.66.1',
                },
                cookieJar: this.cookieJar
            }).catch(async error => {
                console.log("MTBank Error...")
            });
            try {
                var securityToken = response1.body.split('<input name="__RequestVerificationToken" type="hidden" value="')[1].split('"')[0];
            } catch(e) {
                console.log("Error grabbing Security Token...")
            }
            try {
                let date = new Date().toISOString().split("T")[0];
                /*for(var j = 0; j < Object.keys(status.mtBank.locations).length; j++) {
                    status.mtBank.locations[Object.keys(status.mtBank.locations)[j]] = undefined;
                }*/
                for(var n = 0; n < 5; n++) {
                    var response2 = await got.post("https://signupandschedule.umm.edu/MyChart/OpenScheduling/OpenScheduling/GetOpeningsForProvider?noCache=0.14464521336546898", {
                        headers: {
                            'user-agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
                            'x-forwarded-for': '66.249.66.1',
                            '__RequestVerificationToken': securityToken,
                            "Origin": "https://signupandschedule.umm.edu",
                            "Referer": "https://signupandschedule.umm.edu/mychart/SignUpAndSchedule/EmbeddedSchedule?id=RES^84002860&VT=22759",
                            "Sec-Fetch-Dest": "empty",
                            "Sec-Fetch-Mode": "cors",
                            "Sec-Fetch-Site": "same-origin",
                            "X-Requested-With": 'XMLHttpRequest',
                            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                            "Connection": "close"
                        },
                        body: `id=RES%5E84002860&vt=22759&view=grouped&start=${date}&filters=%7B%22Providers%22%3A%7B%22RES%5E84002860%22%3Atrue%7D%2C%22Departments%22%3A%7B%222010017206%22%3Atrue%7D%2C%22DaysOfWeek%22%3A%7B%220%22%3Atrue%2C%221%22%3Atrue%2C%222%22%3Atrue%2C%223%22%3Atrue%2C%224%22%3Atrue%2C%225%22%3Atrue%2C%226%22%3Atrue%7D%2C%22TimesOfDay%22%3A%22both%22%7D`,
                        cookieJar: this.cookieJar
                    }).catch(async error => {
                    });
                    try {
                        date = JSON.parse(response2.body)["LatestDate"]
                        for(var i = 0; i < Object.keys(JSON.parse(response2.body)["AllDays"]).length; i++) {
                            if(!enabled) {
                                console.log(JSON.parse(response2.body)["AllDays"][Object.keys(JSON.parse(response2.body)["AllDays"])[i]]);
                            }
                        }
                    } catch(e) {
                        console.log("Error")
                    }
                }

                await this.sleep(5)
            } catch(e) {
                console.log(e)
            }
        }
    }
}
const Task = new ScheduleMT({})
Task.monitor();