'use strict';

module.exports = class UserDataModule {
  #storage;

  constructor(storage) {
    this.#storage = storage;
  }

  async create(objUser) {
    if (this.checkData(objUser)) {
      const creationResult = await this.#storage.create(objUser);
      console.log('🚀 - UserDataModule - creationResult', creationResult);
      return creationResult;
    }
    return null;
  }

  async read(userId) {
    const readingResult = await this.#storage.read({ id: userId.toString() });
    console.log('🚀 - UserDataModule - readingResult', readingResult);
    return readingResult;
  }

  async readList(objUserFilter) {
    const readListResult = await this.#storage.readList(objUserFilter);
    console.log('🚀 - UserDataModule - readListResult', readListResult);
    return readListResult;
  }

  async update(userId, data) {
    if (
      typeof data.firstName === 'string' ||
      typeof data.lastName === 'string' ||
      typeof data.age === 'number'
    ) {
      const updateResult = await this.#storage.update(userId.toString(), data);
      console.log('🚀 - UserDataModule - updateResult', updateResult);
      return updateResult;
    }
  }

  async delete(userId) {
    const deleteResult = await this.#storage.delete({ id: userId.toString() });
    console.log('🚀 - UserDataModule - deleteResult', deleteResult);
    return deleteResult;
  }

  checkData(data) {
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
