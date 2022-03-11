'use strict';

module.exports = class UserDataModule {
  #storage;

  /**
   * interface for interacting user data with the database
   * @constructor
   * @param {object} storage database instance
   */
  constructor(storage) {
    this.#storage = storage;
  }

  /**
   * method checking data and create user in a storage
   * @param {object} objUser object with user data (firstName, lastName, age and id)
   * @returns {(object|null)} user object or null
   */
  async create(objUser) {
    if (this.#checkData(objUser)) {
      const creationResult = await this.#storage.create(objUser);
      if (creationResult) {
        return objUser;
      }
    }
    return null;
  }

  /**
   * method returns a user object by its id
   * @param {number} userId user id stored in the storage
   * @returns {(object|null)} desired user object
   */
  async read(userId) {
    const readingResult = await this.#storage.read({ id: userId.toString() });
    return readingResult;
  }

  /**
   * method returns array of the users objects by require data
   * @param {object} objUserFilter object with the required data
   * @returns {array{}} array of searching users
   */
  async readList(objUserFilter) {
    const readListResult = await this.#storage.readList(objUserFilter);
    return readListResult;
  }

  /**
   * method update user data by id and updatedData in a storage
   * @param {number} userId user id stored in the storage
   * @param {object} updatedData object with data to be replaced in format {firstName:'string',lastName:'string', age: number, id: 'string'}
   * @returns {boolean} boolean
   */
  async update(userId, updatedData) {
    if (
      typeof updatedData.firstName === 'string' ||
      typeof updatedData.lastName === 'string' ||
      typeof updatedData.age === 'number'
    ) {
      const updateResult = await this.#storage.update(
        { id: userId.toString() },
        updatedData
      );
      return updateResult;
    }
    return false;
  }

  /**
   * method deletes user data by id in a storage
   * @param {number} userId user id stored in the storage
   * @returns {boolean} boolean
   */
  async delete(userId) {
    const deleteResult = await this.#storage.delete({ id: userId.toString() });
    return deleteResult;
  }
  /**
   * method checking user data for a format {firstName:'string', lastName:'string', age:number,id:'string'}
   * @param {object} data user data for checking the format
   * @returns {boolean} boolean
   */
  #checkData(data) {
    if (
      typeof data.firstName === 'string' &&
      typeof data.lastName === 'string' &&
      typeof data.age === 'number' &&
      typeof data.id === 'string'
    ) {
      return true;
    } else {
      return false;
    }
  }
};
