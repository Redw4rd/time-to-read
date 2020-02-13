// Speed means the wpm (Words per minute), the number of words that an adult can read in one minute interval
const ttr = (function ttr(text, options) {
    // Default settings
    let opts = {
        speed: 200,
        min_words_under_min: 360,
        text_to_print: 'minutes to read.'
    };
    Object.assign(opts, options);

    let words = [];

    words = text.match(/\b[a-zA-Z0-9_-]+\b/g);
    
    let required_min = Math.floor(words.length / opts.speed);

    if (words.length < opts.min_words_under_min)
        required_min = 1;

    return required_min + " " + opts.text_to_print;
});

export default ttr;