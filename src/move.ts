// 移动 src to dest
// copy src 到 dest
import { dirname, resolve } from "https://deno.land/std@0.203.0/path/mod.ts";
import {
  ensureDir,
  exists,
  move,
} from "https://deno.land/std@0.203.0/fs/mod.ts";

const [_src, _dest] = Deno.args;

if (!_src || !_dest) {
  throw new Deno.errors.InvalidData("src and dest is required");
}

const src = resolve(_src);
const dest = resolve(_dest);

if (!(await exists(src))) {
  throw new Deno.errors.NotFound(`${src} is not found`);
}

let overwrite = false;
if (await exists(dest)) {
  overwrite = confirm("🥳 Dest already exists, do you want to overwrite it?");
}

await ensureDir(dirname(dest));
await move(src, dest, { overwrite });

console.log();
console.log(`✔ MOVE: %c${src} -> ${dest}`, "color: green");
console.log();
