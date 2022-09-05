#!/usr/bin/node
let Maxx = 0;
const args = process.argv.slice(1);
if (args.length > 1) {
  args.sort();
  Maxx = args[args.length - 2];
}
console.log(Maxx);
