// create a file
// 创建一个文件
import { resolve } from "https://deno.land/std@0.203.0/path/mod.ts";
import { ensureFile, exists } from "https://deno.land/std@0.203.0/fs/mod.ts";

const [_file] = Deno.args;

const file = resolve(_file);

if (await exists(file)) {
  throw new Deno.errors.AlreadyExists(`${file} is exists!`);
}

await ensureFile(file);

console.log();
console.log(`✔ CREATE: %c${file}`, "color: green");
console.log();
