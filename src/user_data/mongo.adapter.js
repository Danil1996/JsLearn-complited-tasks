'use strict';

module.exports = class MongoAdapter {
  #client;

  /** mongo database adapter
   * @constructor
   * @param {object} client raised on server and connected mongo db client instance
   */
  constructor(client) {
    this.#client = client;
  }

  /**
   * method create new user in mongo db
   * @param {object} userObj object with userData
   * @returns {boolean} boolean
   */
  async create(userObj) {
    const result = await this.#client.insertOne(userObj);
    if (result.acknowledged) {
      return true;
    }
    return false;
  }
  /**
   * method returns users data by its id from mongo db
   * @param {object} userId format object {id:'id'}
   * @returns {(object\null)} users data or null
   */
  async read(userId) {
    const result = await this.#client.findOne(userId);
    if (result) {
      return result;
    }
    return null;
  }

  /**
   * method returns array of the users objects by require data from mongo db
   * @param {object} objUserFilter
   * @returns {array{}} array of of searching users
   */
  async readList(objUserFilter) {
    const result = this.#client.find(objUserFilter);

    const allValues = await result.toArray();
    if (result) {
      return allValues;
    }
    return [];
  }

  /**
   * method update an object from mongo db by userId and updatedData
   * @param {object} userId format object {id:'id'}
   * @param {object} data object with data to be replaced
   * @returns {boolean} boolean
   */
  async update(userId, data) {
    const result = await this.#client.updateOne(userId, { $set: data });
    if (result) {
      return true;
    }
    return false;
  }

  /**
   * method removes an object from mongo db by some property
   * @param {object} property format object {id:'id'}
   * @returns {boolean} boolean
   */
  async delete(property) {
    const result = await this.#client.deleteOne(property);
    if (result.deletedCount) {
      return true;
    }
    return false;
  }
};
