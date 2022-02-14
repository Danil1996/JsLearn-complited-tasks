'use strict';

module.exports = class RedisAdapter {
  #client;
  constructor(client) {
    this.#client = client;
  }
  async set(key, value) {
    let result = await this.#client.set(key, value);
    if (result === 'OK') {
      console.log(`RedisAdapter set = ${result}`);
      return true;
    } else {
      return false;
    }
  }

  async get(key) {
    let result = await this.#client.get(key);
    console.log(`RedisAdapter get = ${result}`);

    if (result === null) {
      return null;
    }
    return result;
  }
};
