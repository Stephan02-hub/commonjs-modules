const persona = require('./name.js');
const person = persona("Stephan", "Braghese");


const hobby = require('./hobbies.js')
const hobbys = hobby("play", "musica", "sport")


function io() {
    return {
        fullName: person,
        hobbies : hobbys
    }
}

console.log(io())