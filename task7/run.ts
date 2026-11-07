import { JavaDeveloper, CppDeveloper } from "./devs.ts";
import { RacingGame, FootballGame } from "./games.ts";

const java = new JavaDeveloper();
const cpp = new CppDeveloper();

new RacingGame(java).create();
new RacingGame(cpp).create();
new FootballGame(java).create();
new FootballGame(cpp).create();
