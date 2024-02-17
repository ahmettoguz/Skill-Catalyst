const CommonUtility = require("../../utility/CommonUtility");
const LogUtility = require("../../utility/LogUtility");

const crud = require("../../database/crud/crud");

class UserHelper {
  static arrangeDatas(arrayOfObjects) {
    try {
      // arrange populated data by excluding unnecessary key-values
      arrayOfObjects.forEach((obj) => {
        obj.user_type = obj.user_type.type;
      });

      // remove password key
      CommonUtility.removeKeysFromArrayOfObj(arrayOfObjects, ["password"]);
    } catch (error) {}
  }

  static arrangeData(object) {
    try {
      // arrange populated data by excluding unnecessary key-values
      object.user_type = object.user_type.type;

      // remove password key
      delete object["password"];
    } catch (error) {}
  }

  static async readUserByEmail(email) {
    // get user from database
    const user = await crud.user.Read.readUserByEmail(email);

    // check
    if (!user.state || !user.data) {
      return { state: false };
    }

    // arrange data format
    UserHelper.arrangeData(user.data);

    return { state: true, user: user };
  }
}

module.exports = UserHelper;
