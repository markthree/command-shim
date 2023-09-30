import { exists } from "https://deno.land/std@0.203.0/fs/exists.ts";

const file = Deno.args[0];

if (
  await exists(file, {
    isFile: true,
  })
) {
  const fileText = await Deno.readTextFile(file);
  console.log();
  console.log(fileText);
  console.log();
} else {
  console.log(`${file} is not exists`);
}