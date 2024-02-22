class EnvUtility {
  // static port = process.env.PORT || 3000;
  // static jwtSecret = process.env.JWT_SECRET;
  // static dbURI = process.env.DB_URI;
  // static isSslEnabled = process.env.SSL || "false";
  // static protocol = this.isSslEnabled == true ? "https" : "http";
  // static isLoggingActive = process.env.LOG || "false";

  // boolean
  static isSslEnabled = process.env.SSL === "true";
  static protocol = this.isSslEnabled ? "https" : "http";
  static isLoggingActive = process.env.LOG === "true";

  // int
  static port = parseInt(process.env.PORT, 10) || 3000;

  // string
  static dbURI = process.env.DB_URI;
  static jwtSecret = process.env.JWT_SECRET;

  static print() {
    console.log(
      "port:",
      this.port,
      typeof this.port,
      "\n",
      "jwtSecret:",
      this.jwtSecret,
      typeof this.jwtSecret,
      "\n",
      "dbURI:",
      this.dbURI,
      typeof this.dbURI,
      "\n",
      "isSslEnabled:",
      this.isSslEnabled,
      typeof this.isSslEnabled,
      "\n",
      "protocol:",
      this.protocol,
      typeof this.protocol,
      "\n",
      "isLoggingActive:",
      this.isLoggingActive,
      typeof this.isLoggingActive,
      "\n"
    );
  }
}

// Exporting the AppConfig class
module.exports = EnvUtility;
