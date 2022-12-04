const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://kripikbalado:asdjkl@clustercovid.qjnnwfm.mongodb.net/test";

const client = new MongoClient(uri);

let database;

async function connect() {
  try {
    await client.connect();
    database = client.db("restauranOrder");

    return database;
  } catch (error) {
    console.log(error);
  }
}

function getDatabase() {
  return database;
}

module.exports = { connect, getDatabase };
