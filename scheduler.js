const got = require("got");
const { CookieJar } = require("tough-cookie");
const open = require("open");
const qs = require("qs");
const Captcha = require("2captcha")
let enabled = false;
let date2;
let time;
let currentRunning = {};
const CaptchaTask = new CaptchaGen();
CaptchaTask.generateCaptchas();
class CaptchaGen {
    constructor() {
        this.captchaList = [];
    }
    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async generateCaptchas() {
        const solver = new Captcha.Solver("d7a73c14085dc2c6f579e70548f7a6c4");
        while(true) {
            solver.recaptcha("6LffjDEaAAAAAB36hjaQJmIkZTNDrpyjDMugfvZt", "https://signupandschedule.umm.edu/mychart/SignUpAndSchedule/EmbeddedSchedule?id=RES^84002860&VT=22759")
            .then(async (res) => {
                this.captchaList.push(res.data);
                await this.sleep(40000);
                var index = this.captchaList.indexOf(res.data);
                this.captchaList.splice(index, 1);
            }).catch(error => {
                console.log("Error with captcha...")
            });
            await this.sleep(10000)
        }
    }
    async grabCaptcha() {
        if(this.captchaList.length > 0) {
            var temp = this.captchaList[0];
            this.captchaList.splice(0,1);
            return temp;
        } else {
            return "NoCaptcha";
        }
    }
}
class ScheduleChecker {
    constructor(phone) {
        this.phone = phone;
    }
    async check() {
        if(currentRunning[this.phone]) {
            return currentRunning[this.phone].status;
        } else {
            return "Error"
        }
    }
}
class ScheduleMT {
    constructor(info) {
        this.info = info;
        currentRunning[this.info.phone] = {fullName:this.info.fName+" "+this.info.lName,status: false}
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
                for(var n = 0; n < 1; n++) {
                    var response2 = await got.post("https://signupandschedule.umm.edu/MyChart/OpenScheduling/OpenScheduling/GetOpeningsForProvider?noCache=0.14464521336546898", {
                        headers: {
                            'user-agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G920A) AppleWebKit (KHTML, like Gecko) Chrome Mobile Safari (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)',
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
                        var i = 0;
                        if(Object.keys(JSON.parse(response2.body)["AllDays"]).length>0) {
                            if(!enabled) {
                                console.log(JSON.parse(response2.body)["AllDays"][Object.keys(JSON.parse(response2.body)["AllDays"])[0]].DateISO);
                                date2 = JSON.parse(response2.body)["AllDays"][Object.keys(JSON.parse(response2.body)["AllDays"])[0]].DateISO;
                                time = JSON.parse(response2.body)["AllDays"][Object.keys(JSON.parse(response2.body)["AllDays"])[0]].Slots[0].StartTimeISO;
                                var captchaToken = await CaptchaTask.grabCaptcha();
                                if(captchaToken == "NoCaptcha") {
                                    console.log("No captcha available...");
                                } else {
                                    var response3 = await got.post("https://signupandschedule.umm.edu/mychart/OpenScheduling/OpenScheduling/CreatePreloginSession", {
                                        headers: {
                                            'user-agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G920A) AppleWebKit (KHTML, like Gecko) Chrome Mobile Safari (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)',
                                            'x-forwarded-for': '66.249.66.1',
                                            '__RequestVerificationToken': securityToken,
                                            'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
                                            "X-Captcha-Response": captchaToken
                                        },
                                        body: "accessCode=&userEnteredDateOfBirth=&sourceToken=",
                                        cookieJar: this.cookieJar
                                    });
                                    var sessionToken = JSON.parse(response3.body).SessionToken;
                                    var response4 = await got.post("https://signupandschedule.umm.edu/mychart/OpenScheduling/OpenScheduling/MakeReservation", {
                                        headers: {
                                            'user-agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G920A) AppleWebKit (KHTML, like Gecko) Chrome Mobile Safari (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)',
                                            'x-forwarded-for': '66.249.66.1',
                                            '__RequestVerificationToken': securityToken,
                                            'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
                                            "X-Requested-With": "XMLHttpRequest"
                                        },
                                        body: qs.stringify({
                                            "providerIdList[0]": "RES^84002860",
                                            "baseProviderId": "RES^84002860",
                                            "departmentId": "2010017206",
                                            "visitTypeId": "22759",
                                            "date": date2,
                                            "startTime": time,
                                            "duration": "15",
                                            "clientTimeZoneOffset": "240",
                                            "sessionToken": sessionToken
                                        }),
                                        cookieJar: this.cookieJar
                                    });
                                    console.log("Session created...");
                                    if(JSON.parse(response4.body).CanUseSlot == false) {
                                        console.log("Too late");
                                    } else {
                                        var reservationKey = JSON.parse(response4.body).ReservationKey;
                                        var response5 = await got.post("https://signupandschedule.umm.edu/mychart/OpenScheduling/SignupAndSchedule/Signup?noCache=0.9851966613756604", {
                                            headers: {
                                                'user-agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G920A) AppleWebKit (KHTML, like Gecko) Chrome Mobile Safari (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)',
                                                'x-forwarded-for': '66.249.66.1',
                                                '__RequestVerificationToken': securityToken,
                                                'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
                                                "X-Requested-With": "XMLHttpRequest"
                                            },
                                            body: qs.stringify({
                                                "FirstName": this.info.fName,
                                                "MiddleName": "",
                                                "LastName": this.info.lName,
                                                "Gender": this.info.gender,
                                                "DateOfBirthStr": this.info.dob,
                                                "Race": this.info.race,
                                                "Ethnicity": "-1",
                                                "PreferredLanguage": "-1",
                                                "NationalId": "",
                                                "AddressLine1": this.info.address1,
                                                "AddressLine2": "",
                                                "City": this.info.city,
                                                "State": "21",
                                                "PostalCode": this.info.zip,
                                                "HomePhone": this.info.phone,
                                                "WorkPhone": "",
                                                "MobilePhone": "",
                                                "Email": "",
                                                "SupportsAccountCreation": "False",
                                                "DuplicateResult": "",
                                                "DepartmentIdForPatientCreate": "2010017206",
                                                "AppointmentProviderId": "RES^84002860",
                                                "AppointmentVisitTypeId": "22759",
                                                "AppointmentTime": time,
                                                "AppointmentDate": date2,
                                                "ReservationKey": reservationKey,
                                                "SessionToken": sessionToken
                                            }),
                                            cookieJar: this.cookieJar
                                        });
                                        console.log(response5.body);
                                        if(JSON.parse(response5.body).action != "showerrors") {
                                            enabled = true;
                                            currentRunning[this.info.phone].status = true;
                                            return;
                                        } else {
                                            console.log("Error filling out form for "+this.info.phone+"...");
                                        }
                                    }
                                }
                            }
                        }
                        if(Object.keys(JSON.parse(response2.body)["AllDays"]).length == 0) {
                            enabled = false;
                        }
                    } catch(e) {
                        //console.log(e)
                    }
                }

                await this.sleep(3)
            } catch(e) {
                //console.log("Error 2")
            }
        }
    }
}