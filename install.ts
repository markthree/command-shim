import { execa } from "./shared/process.ts";
import { walk } from "https://deno.land/std@0.203.0/fs/mod.ts";
import { basename } from "https://deno.land/std@0.203.0/path/mod.ts";

for await (
  const enrty of walk("./src", {
    includeFiles: true,
    includeDirs: false,
  })
) {
  const { name, path } = enrty;
  await execa(["deno", "install", "-Afn", basename(name, ".ts"), path]);
}
