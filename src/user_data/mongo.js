'use strict';

const { MongoClient } = require('mongodb');
const CONNECTION_STRING =
  'mongodb+srv://Danil_admin:kodxy611@cluster0.wj1u5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const client = new MongoClient(CONNECTION_STRING);
const MongoAdapter = require('./mongo.adapter.js');
const UserDataModule = require('./user_data_module.js');

async function main() {
  // Connection
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db('veb-server');
  const collection = db.collection('users');
  // Working place
  const adapter = new MongoAdapter(collection);
  const user = new UserDataModule(adapter);

  return 'done.';
}

main().then(console.log).catch(console.error);

// Users
const Alex = {
  firstName: 'Alexander',
  lastName: 'Suvorov',
  age: 34,
  id: '234',
};
const Oleg = {
  firstName: 'Oleg',
  lastName: 'Belinskii',
  age: 53,
  id: '253',
};

const Danya = { firstName: 'Danil', lastName: 'Belinskii', age: 25, id: '225' };

const Olya = { firstName: 'Olha', lastName: 'Belinskaya', age: 50, id: '250' };

const updateData = { firstName: 'Danya', age: 22 };
