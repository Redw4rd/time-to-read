import {default as ttr} from './ttr.mjs';

console.log(ttr("And it would work just the same. What style you use is up to you, however it arguably makes more sense to leave your module code alone, and make the changes in the imports. This especially makes sense when you are importing from third party modules that you don't have any control over.", {
    speed: 180,
    min_words_under_min: 360
}));