// clean a dir
// 清理一个目录
import { resolve } from "https://deno.land/std@0.203.0/path/mod.ts";
import { walk } from "https://deno.land/std@0.203.0/fs/walk.ts";
import { emptyDir, exists } from "https://deno.land/std@0.203.0/fs/mod.ts";

// clean cache
if (Deno.args.includes("-c") || Deno.args.includes("--cache")) {
  for await (
    const entry of walk(Deno.cwd(), {
      includeDirs: true,
      includeFiles: false,
      followSymlinks: true,
      match: [
        /node_modules|temp|cache|dist|\.(nuxt|output)/,
      ],
    })
  ) {
    await emptyDir(entry.path);
    console.log(`✔ CLEAN: %c${entry.path}`, "color: yellow");
  }

  Deno.exit(0);
}

const [_src] = Deno.args;

const src = resolve(_src);

if (!src) {
  throw new Deno.errors.InvalidData("src is required");
}

if (!(await exists(src))) {
  throw new Deno.errors.NotFound(`${src} is not found`);
}

await emptyDir(src);

if (Deno.args.includes("-d")) {
  await Deno.remove(src);
}

console.log();
console.log(`✔ CLEAN: %c${src}`, "color: yellow");
console.log();
