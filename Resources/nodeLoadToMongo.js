// Import required module csvtojson and mongodb packages
const csvtojson = require('csvtojson');
const mongodb = require('mongodb');

var url = 'mongodb://localhost:27017/parkMaps';

var dbConn;
mongodb.MongoClient.connect(url, {
    useUnifiedTopology: true,
}).then((client) => {
    console.log('DB Connected!');
    dbConn = client.db();
}).catch(err => {
    console.log('DB Connection Error: ${err.message}');
});

// CSV file name
const parklocfile = 'parkLocations.csv';
var insertParks = [];
csvtojson().fromFile(parklocfile).then(source => {
   6 // Fetching the all data from each row
    for (var i = 0; i < source.length; i++) {
         var oneRow = {
             Code: source[i]['Code'],
             Place_Name: source[i]['Place_Name'],
             Lat: source[i]['Latitude'],
             Long: source[i]['Longitude']
         };
         insertParks.push(oneRow);
     }
     //inserting into the table “employees”
     var collectionName = 'parkLocations';
     var collection = dbConn.collection(collectionName);
     collection.insertMany(insertParks, (err, result) => {
         if (err) console.log(err);
         if(result){
             console.log('Import CSV into database successfully.');
         }
     });
});

const animalfile = 'AnimalLocations.csv';
var insertAnimals = [];
csvtojson().fromFile(animalfile).then(source => {
   6 // Fetching the all data from each row
    for (var i = 0; i < source.length; i++) {
         var oneRow = {
             Code: source[i]['Code'],
             Place_Name: source[i]['Place_Name'],
             Common_name: source[i]['CommonNames'],
             Category: source[i]['Category'],
             Lat: source[i]['Latitude'],
             Long: source[i]['Longitude']
         };
         insertAnimals.push(oneRow);
     }
     //inserting into the table “employees”
     var collectionName = 'animalLocations';
     var collection = dbConn.collection(collectionName);
     collection.insertMany(insertAnimals, (err, result) => {
         if (err) console.log(err);
         if(result){
             console.log('Import CSV into database successfully.');
         }
     });
});