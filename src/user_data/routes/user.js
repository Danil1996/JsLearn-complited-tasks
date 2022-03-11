'use strict';

const { MongoClient } = require('mongodb');
const MongoAdapter = require('../mongo.adapter.js');
const UserDataModule = require('../user_data_module.js');
require('dotenv/config');
const dbConnect = process.env.MONGO_CONNECTION_STRING;
const client = new MongoClient(dbConnect);

const express = require('express');
// Routing for middleware
const router = express.Router();

async function main(method, data) {
  // Connection
  await client.connect();
  console.log('Connected successfully to server');
  // DB Name
  const db = client.db('veb-server');
  // DB Collcection
  const collection = db.collection('users');
  // Initialization Mongo_adapter
  const adapter = new MongoAdapter(collection);
  // Initialization Interface
  const user = new UserDataModule(adapter);
  // Basic methods for routing
  if (method === 'post') {
    return await user.create(data);
  }
  if (method === 'get') {
    return await user.read(data);
  }
  if (method === 'getlist') {
    return await user.readList(data);
  }
  if (method === 'update') {
    return await user.update(data[0], data[1]);
  }
  if (method === 'delete') {
    return await user.delete(data);
  }
  console.log('done');
}

router.post('/', async (req, res) => {
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: +req.body.age,
    id: req.body.id,
  };
  const result = await main('post', data);
  res.send(result);
});

router.get('/', async (req, res) => {
  const data = req.body.id;
  const result = await main('get', data);

  res.send(result);
});

router.get('/list', async (req, res) => {
  const data = req.body;
  const result = await main('getlist', data);

  res.send(result);
});

router.put('/', async (req, res) => {
  console.log(req.body);
  const id = req.body.id;
  const filter = req.body.filter;
  if (filter.age) {
    filter.age = +filter.age;
  }
  const result = await main('update', [id, filter]);

  res.send(result);
});

router.delete('/', async (req, res) => {
  const data = req.body.id;
  const result = await main('delete', data);

  res.send(result);
});

module.exports = router;
