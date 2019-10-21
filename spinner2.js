const positions = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 100;

for (const pos of positions) {
  setTimeout(() => {
    process.stdout.write(`\r${pos}    `);
  }, delay)
  delay += 200;
}