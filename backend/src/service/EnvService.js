class EnvService {
  static port = process.env.PORT || 3000;
  static jwtSecret = process.env.JWT_SECRET;
  static dbURI = process.env.DB_URI;
  static isSslEnabled = process.env.SSL || "false";
  static protocol = this.isSslEnabled == true ? "https" : "http";
  static isLoggingActive = process.env.LOG || "false";
}

// Exporting the AppConfig class
module.exports = EnvService;
