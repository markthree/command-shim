export async function execa(cmd: string[]) {
  const command = cmd.shift()!;
  const commander = new Deno.Command(command, {
    args: cmd,
    stdout: "inherit",
    stderr: "inherit",
    stdin: "inherit",
  });

  const p = commander.spawn();

  let resolved = false;
  globalThis.addEventListener("unload", () => {
    if (!resolved) {
      p.kill();
    }
  });

  await p.status;
  resolved = true;
}
