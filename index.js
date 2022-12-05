function introduction(name) {
    return `Hi, my name is ${name}.`
}
const greeting = introduction("Aki")

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

const argument = introductionWithLanguage("Aki", "Ember.js")

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
    
}
const message = introductionWithLanguageOptional("Gracie");

const effort = introductionWithLanguageOptional("Gracie", "Python");