import { resolve } from "https://deno.land/std@0.184.0/path/mod.ts";
import { emptyDir, exists } from "https://deno.land/std@0.184.0/fs/mod.ts";

const [_src] = Deno.args;

const src = resolve(_src);

if (!src) {
  throw new Deno.errors.InvalidData("src is required");
}

if (!(await exists(Deno.args[0]))) {
  throw new Deno.errors.NotFound(`${src} is not found`);
}

await emptyDir(src);

console.log();
console.log(`✔ CLEAN: %c${src}`, "color: yellow");
