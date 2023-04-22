import { execa } from "../shared/process.ts";

function hasOptions(options: string[]) {
  return options.some((option) => Deno.args.includes(option));
}

const isQuery = hasOptions(["-l", "--list"]);

if (isQuery) {
  await execa(["SCHTASKS", "/QUERY"]);
}

// TODO