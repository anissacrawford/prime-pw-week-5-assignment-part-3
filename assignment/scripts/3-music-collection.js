console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
}
  collection.push(album);
  return album;
} //Adds albums to collection array

console.log(addToCollection('AM', 'Arctic Monkeys', 2013));
console.log(addToCollection('Blonde', 'Frank Ocean', 2016));
console.log(addToCollection('Circles', 'Mac Miller', 2020));
console.log(addToCollection('Man On The Moon', 'Kid Cudi', 2009));
console.log(addToCollection('Social Cues', 'Cage the Elephant', 2019));
console.log(addToCollection('Purple Rain', 'Prince', 1984));
console.log(addToCollection('Doves Cry', 'Prince', 1984)); //added to test double artist
//calling albums to addToCollection function

console.log(collection);
//logging collection array

function showCollection (array){
  console.log(array.length);
  for (let i=0; i<array.length; i++){
    console.log(array[i].title, " by ", array[i].artist, " published in ", array[i].yearPublished); //accessing collection[i]
  }
  return;
}

showCollection(collection);//adding collection array to showCollection function and logging


function findByArtist (artist) {               //takes in artist parameter
  let foundArtist = [];
  for (let i=0; i<collection.length; i++){     //loops through collection
    if (collection[i].artist == artist){       //if collection artist is the same as chosen artist
      foundArtist.push(collection[i].artist);  //add artist to collection array
    }
  }  return foundArtist;                       //return artist
}

console.log(findByArtist('Arctic Monkeys'));  //logs, calls, and gives parameters
console.log(findByArtist('Beyonce'));
console.log(findByArtist('Prince'));
