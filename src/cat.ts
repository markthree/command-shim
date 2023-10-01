import { exists } from "https://deno.land/std@0.203.0/fs/exists.ts";

const path = Deno.args[0];

if (
  await exists(path, {
    isFile: true,
  })
) {
  const file = await Deno.open(path);
  await file.readable.pipeTo(Deno.stdout.writable);
} else {
  console.log(`${path} is not exists`);
}
