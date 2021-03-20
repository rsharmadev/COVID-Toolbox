const got = require("got");

class News {
    constructor() {
        this.query = "vaccine";
    }
    async grabNews() {
        var response = await got.get(`https://newsapi.org/v2/everything?q=${this.query}&from=2021-03-18&sortBy=publishedAt&apiKey=cd0b9c1adc62482683bf628e3993dd34`);
        this.response = [];
        for(var i = 0; i < 5; i++) {
            this.response.push({})
            this.response[i].url = JSON.parse(response.body).articles[i].url;
            this.response[i].title = JSON.parse(response.body).articles[i].title;
            this.response[i].urlToImage = JSON.parse(response.body).articles[i].urlToImage;
            this.response[i].content = JSON.parse(response.body).articles[i].content;
        }
        return this.response;
    }
}
module.exports = {
    News: News
}