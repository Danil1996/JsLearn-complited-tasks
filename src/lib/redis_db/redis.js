'use strict';

const Redis = require('redis');
const RedisAdapter = require('./redis_adapter.js');
const Cache = require('./cache.js');

const client = Redis.createClient();
const redisAdapter = new RedisAdapter(client);
const cache = new Cache(redisAdapter);

(async () => {
  client.on('error', (err) => console.log('Redis Client Error', err));
  await client.connect();
})();

const obj = { id: 28, name: 'Danya', age: 25 };
cache.set(obj.id, obj);
cache.get(obj.id);
