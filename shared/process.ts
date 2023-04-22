export async function execa(cmd: string[]) {
  const p = Deno.run({
    cmd,
  });

  await p.status();
}
