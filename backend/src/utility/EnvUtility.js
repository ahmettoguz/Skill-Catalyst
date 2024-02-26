class EnvUtility {
  // boolean
  static isSslEnabled = process.env.SSL === "true";
  static protocol = this.isSslEnabled ? "https" : "http";
  static isLoggingActive = process.env.LOG === "true";

  // int
  static port = parseInt(process.env.PORT) || 3000;

  // string
  static dbURI = process.env.DB_URI;
  static jwtSecret = process.env.JWT_SECRET;
}

// Exporting the AppConfig class
module.exports = EnvUtility;
