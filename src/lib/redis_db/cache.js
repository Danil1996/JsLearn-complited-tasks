'use strict';

module.exports = class Cache {
  #storage;
  constructor(storage) {
    this.#storage = storage;
  }

  async set(id, payLoad) {
    const payLoadToJSON = JSON.stringify(payLoad, null, 0);
    const result = await this.#storage.set(id, payLoadToJSON);
    if (!result) {
      return false;
    }
    console.log(`Cashe set = ${result}`);
    return true;
  }

  async get(id) {
    const result = await this.#storage.get(id);
    if (result) {
      console.log(`Cashe get = ${result}`);
      return JSON.parse(result);
    } else {
      return null;
    }
  }
};
