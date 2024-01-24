class UtilService {
  static removeKeysFromArrayOfObj(arrayOfObj, keys) {
    return arrayOfObj.map((obj) => {
      keys.forEach((key) => delete obj[key]);
      return obj;
    });
  }
}

module.exports = UtilService;
