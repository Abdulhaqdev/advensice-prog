const readline = require("readline");

class DatabaseConnection {
  static #instance = null;
  #isConnected = false;
  #connection = null;

  constructor() {
    if (DatabaseConnection.#instance) {
      throw new Error(
        "DatabaseConnection singleton. getConnection() dan foydalaning."
      );
    }
  }

  static getConnection() {
    if (DatabaseConnection.#instance === null) {
      DatabaseConnection.#instance = new DatabaseConnection();
    }
    return DatabaseConnection.#instance;
  }

  connect(config) {
    if (this.#isConnected) {
      console.log("Allaqachon ulangan. Yangi connection ochilmaydi.");
      return this.#connection;
    }

    this.#connection = {
      host: config.host,
      user: config.user,
      database: config.database,
      connectedAt: new Date().toISOString(),
    };
    this.#isConnected = true;

    console.log("DB ga ulandi:", this.#connection.host);
    return this.#connection;
  }

  query(sql) {
    if (!this.#isConnected) {
      throw new Error("Avval connect() qiling.");
    }
    console.log("SQL bajarildi:", sql);
    return { ok: true, sql };
  }

  disconnect() {
    this.#connection = null;
    this.#isConnected = false;
    console.log("DB dan uzildi.");
  }

  get status() {
    return this.#isConnected ? "connected" : "disconnected";
  }
}

function ask(rl, question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer.trim()));
  });
}

async function askDbConfig() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("--- DB ma'lumotlarini kiriting ---");
  const host = await ask(rl, "Host: ");
  const user = await ask(rl, "User: ");
  const database = await ask(rl, "Database: ");
  rl.close();

  if (!host || !user || !database) {
    throw new Error("Host, user va database bo'sh bo'lmasligi kerak.");
  }

  return { host, user, database };
}

async function main() {
  const db1 = DatabaseConnection.getConnection();
  const db2 = DatabaseConnection.getConnection();

  console.log("Bir xil obyektmi?", db1 === db2);

  const config = await askDbConfig();
  db1.connect(config);

  db2.connect({
    host: "boshqa-host",
    user: "admin",
    database: "other",
  });

  db1.query("SELECT * FROM users");
  console.log("Status:", db2.status);
  console.log("Ulangan DB:", db1);
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}

module.exports = DatabaseConnection;
