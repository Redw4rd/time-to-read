class timeToRead {

    words = Array;
    time = Object;
    text = "";

    settings = {
        reading_speed: 200
    };

    constructor(settings) {
        Object.assign(this.settings, settings);
    }

    textToWords() {
        this.words = this.text.match(/([A-Za-z0-9_\-\'])+/g);
    }

    getTime(){
        return this.time = {
            minutes: this.min = Math.floor(this.words.length / this.settings.reading_speed),
            seconds: Math.floor(60 / (this.settings.reading_speed / (this.words.length % this.settings.reading_speed)))
        };
    }

}

export { timeToRead };