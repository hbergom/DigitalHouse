const fs = require('fs');
function Movies(){
    const leerMovies = JSON.parse(fs.readFileSync(__dirname + '/data/movies.json', 'utf-8'));  
 
};
function Faqs(){
    cconst leerFaqs = JSON.parse(fs.readFileSync(__dirname + '/data/faqs.json', 'utf-8'));  
 
};
function Th(){
    const leerTheaters = JSON.parse(fs.readFileSync(__dirname + '/data/theaters.json', 'utf-8'));
}
module.exports = Movies();
module.exports = Faqs();
module.exports = Th();