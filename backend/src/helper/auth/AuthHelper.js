class AuthHelper {
  static handleInput(req) {
    const errors = [];

    // get inputs from post body
    const { email, password } = req.body;

    // check inputs undefined or null
    if (!email || !password) {
      errors.push({ key: "all", error: "invalid input" });
      return { isValid: false, errors };
    }

    // trim fields
    const input = {
      email: email.trim(),
      password: password.trim(),
    };

    // check email
    if (input.email === undefined || input.email.length == 0)
      errors.push({ key: "email", error: "email required" });

    // check password
    if (input.password === undefined || input.password.length == 0)
      errors.push({ key: "password", error: "password required" });

    // return result
    const isValid = errors.length == 0 ? true : false;
    return { isValid, errors, input };
  }
}

module.exports = AuthHelper;
