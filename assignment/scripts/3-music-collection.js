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
}

console.log(addToCollection('AM', 'Arctic Monkeys', 2013));
console.log(addToCollection('Blonde', 'Frank Ocean', 2016));
console.log(addToCollection('Circles', 'Mac Miller', 2020));
console.log(addToCollection('Man On The Moon', 'Kid Cudi', 2009));
console.log(addToCollection('Social Cues', 'Cage the Elephant', 2019));
console.log(addToCollection('Purple Rain', 'Prince', 1984));

console.log(collection);


function showCollection (array){
  console.log(array.length);
  for (let i=0; i<array.length; i++){
    console.log(album.title, " by ", album.artist, " published in ", album.yearPublished)
  }
}

console.log(showCollection(collection));

// for (i=0; i<array.length; i++){
//   console.log(title + 'by' + artist + 'published in' + yearPublished)
// }



// function findByArtist (artist){
//   let foundArtist = [];
//   for (collection){
//     foundArtist.push(artist)
//   }
// }

// console.log(findByArtist('Arctic Monkeys'));
// console.log(findByArtist('Beyonce'));
