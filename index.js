const { Timer } = require("timer-node");
function main() {
  const timer = new Timer({ label: "demo" });
  timer.start();

  let a = 0;

  for (let i = 0; i < 100000; i++) {
    a++;
  }

  timer.stop();
  console.log("Total elapsed:", timer.time());
}

main();
