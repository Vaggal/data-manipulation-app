const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("src/assets/data/sensor_readings.json"),
  crlfDelay: Infinity,
});

const readings = [];

rl.on("line", (line) => {
  readings.push(JSON.parse(line));
});

rl.on("close", () => {
  fs.writeFileSync("src/assets/data/sensor_readings_correct.json", JSON.stringify(readings));
});
