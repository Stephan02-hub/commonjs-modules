const persona = require('./name.js');
const name = persona("Stephan", "Braghese");


const hobby = require('./hobbies.js')
const hobby = hobby("play", "musica", "sport")


function io() {
    return {
        fullName: name,
        hobbies : hobby
    }
}

console.log(io());