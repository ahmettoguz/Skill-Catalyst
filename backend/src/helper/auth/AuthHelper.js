class AuthHelper {
  static validateLoginInput(req) {
    const errors = [];

    // get inputs from post body
    const input = {
      email: req.body.email.trim(),
      password: req.body.password.trim(),
    };

    // check inputs
    // check email
    console.log(input.email);
    console.log(input.email.length);
    if (input.email === undefined || input.email.length == 0)
      errors.push({ key: "email", error: "email required" });

    // check password
    if (input.password === undefined || input.password.length == 0)
      errors.push({ key: "password", error: "password required" });

    // return result
    const state = errors.length == 0 ? true : false;
    return { state, errors };
  }
}

module.exports = AuthHelper;
