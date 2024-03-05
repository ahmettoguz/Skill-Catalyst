class EnvUtility {
  // boolean
  static isSslEnabled = process.env.SSL === "true";
  static protocol = this.isSslEnabled ? "https" : "http";
  static isLoggingActive = process.env.LOG === "true";

  // int
  static port: number = parseInt(process.env.PORT || "3000", 10);

  // string
  static dbURI = process.env.DB_URI;
  static jwtSecret: string = process.env.JWT_SECRET || "fallbackSecret";
}

module.exports = EnvUtility;