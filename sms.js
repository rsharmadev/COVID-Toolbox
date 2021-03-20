const accountSid = 'AC9e4a91e0e6865a7d8c5534766f11d532';
const authToken = 'e733ebfcc56a2c399786ae95c9f5b734';
const client = require('twilio')(accountSid, authToken);

class Sms {
    constructor() {
        this.accountSid = 'AC9e4a91e0e6865a7d8c5534766f11d532';
        this.authToken = 'e733ebfcc56a2c399786ae95c9f5b734';
        this.name = 'Coke';
        this.from_number = '2393604245'
    }
    
    sendSms(to_number) {
        client.messages
            .create({
                body: `Appointment has been scheduled for ${this.name}`,
                from: this.from_number,
                to: to_number
            });
    }
}

module.exports = {
    Sms: Sms
}