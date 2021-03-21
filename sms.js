const accountSid = 'AC9e4a91e0e6865a7d8c5534766f11d532';
const authToken = 'e733ebfcc56a2c399786ae95c9f5b734';
const client = require('twilio')(accountSid, authToken);

class Sms {
    constructor(info) {
        this.accountSid = 'AC9e4a91e0e6865a7d8c5534766f11d532';
        this.authToken = 'e733ebfcc56a2c399786ae95c9f5b734';
        this.from_number = '2393604245'
        this.info = info;
    }
    
    sendSms() {
        client.messages
            .create({
                body: `Appointment has been scheduled for ${this.info.name} at M&T Bank Stadium. Arrive at ${this.info.time} on ${this.info.date}! Make sure you bring a valid ID with you to prove your identity when they ask for your name!`,
                from: this.from_number,
                to: this.info.phone
            });
    }
}

module.exports = {
    Sms: Sms
}