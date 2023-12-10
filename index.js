function introduction(name) {
    return `Hi, my name is ${name}.`;
}
console.log(introduction("Aki")); // Output: Hi, my name is Aki.
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguage("Aki", "Ember.js."));
function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
}
sayHelloTo("Gracie"); // Output: Hello, Gracie!
function introductionWithLanguageOptional(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguageOptional("Gracie", "JavaScript"));
function introductionWithLanguageOptional(name, language = `JavaScript`) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguageOptional("Gracie"));