class ProgrammLogger {
  static #instance = null;
  static #logFile = "This is log file.\n";

  constructor() {
    if (ProgrammLogger.#instance) {
      throw new Error(
        "ProgrammLogger singleton. getProgrammLogger() dan foydalaning."
      );
    }
  }

  static getProgrammLogger() {
    if (ProgrammLogger.#instance === null) {
      ProgrammLogger.#instance = new ProgrammLogger();
    }
    return ProgrammLogger.#instance;
  }

  addLogInfo(info) {
    ProgrammLogger.#logFile += info + "\n";
  }

  showLogInfo() {
    console.log(ProgrammLogger.#logFile);
  }
}

const logger1 = ProgrammLogger.getProgrammLogger();
const logger2 = ProgrammLogger.getProgrammLogger();

console.log("Bir xil obyektmi?", logger1 === logger2);

logger1.addLogInfo("User logged in");
logger2.addLogInfo("File saved");
logger1.addLogInfo("App closed");

logger1.showLogInfo();

module.exports = ProgrammLogger;
