import { walk } from "https://deno.land/std@0.184.0/fs/mod.ts";
import { basename } from "https://deno.land/std@0.184.0/path/win32.ts";

for await (const enrty of walk("./src", {
  includeFiles: true,
  includeDirs: false
})) {
  const p = Deno.run({
    cmd: ["deno", "install", "-Afn", basename(enrty.name, ".ts"), enrty.path],
  });
  await p.status()
}
