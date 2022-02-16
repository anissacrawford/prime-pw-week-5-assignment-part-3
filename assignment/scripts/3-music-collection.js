console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  return album;
}

addToCollection();

console.log(addToCollection('AM', 'Arctic Monkeys', 2013));
console.log(addToCollection('Blonde', 'Frank Ocean', 2016));
console.log(addToCollection('Circles', 'Mac Miller', 2020));
console.log(addToCollection('Man On The Moon', 'Kid Cudi', 2009));
console.log(addToCollection('Social Cues', 'Cage the Elephant', 2019));
console.log(addToCollection('Purple Rain', 'Prince', 1984));

console.log(collection);
