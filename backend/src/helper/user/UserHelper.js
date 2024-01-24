const UtilService = require("../../service/UtilService");

class UserHelper {
  static arrangeDatas(arrayOfObjects) {
    // arrange populated data by excluding unnecessary key-values
    arrayOfObjects.forEach((obj) => {
      obj.user_type = obj.user_type.type;
    });

    // remove password key
    UtilService.removeKeysFromArrayOfObj(arrayOfObjects, ["password"]);
  }

  static arrangeData(object) {
    // arrange populated data by excluding unnecessary key-values
    object.user_type = object.user_type.type;

    // remove password key
    delete object["password"];
  }
}

module.exports = UserHelper;
