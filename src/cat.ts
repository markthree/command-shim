import { exists } from "https://deno.land/std@0.203.0/fs/exists.ts";

const file = Deno.args[0];

if (await exists(file)) {
  const fileText = await Deno.readTextFile(file);
  console.log();
  console.log(fileText);
  console.log();
} else {
  console.warn(`${file} is not exists`);
}
