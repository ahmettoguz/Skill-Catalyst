class CommonUtility {
  static removeKeysFromArrayOfObj(arrayOfObj: any, keys: any) {
    return arrayOfObj.map((obj: any) => {
      keys.forEach((key: any) => delete obj[key]);
      return obj;
    });
  }
}

module.exports = CommonUtility;