'use strict';

module.exports = class MongoAdapter {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async create(userObj) {
    const result = await this.#client.insertOne(userObj);
    if (result.acknowledged) {
      return result;
    }
    return null;
  }

  async read(userId) {
    const result = await this.#client.findOne(userId);
    if (result) {
      return result;
    }
    return null;
  }

  async readList(objUserFilter) {
    const result = this.#client.find(objUserFilter);
    const allValues = await result.toArray();
    if (result) {
      return allValues;
    }
    return [];
  }

  async update(userId, data) {
    const result = await this.#client.updateOne(userId, { $set: data });
    if (result) {
      return true;
    }
    return false;
  }

  async delete(userId) {
    const result = await this.#client.deleteOne(userId);
    if (result.deletedCount) {
      return true;
    }
    return false;
  }
};
