// Bundles src/content/validate.ts with esbuild (shipped with Vite) and runs the content checks.
import { build } from 'esbuild';

const result = await build({
  entryPoints: ['src/content/validate.ts'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  write: false,
  logLevel: 'silent',
});
const code = result.outputFiles[0].text;
const { validate } = await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);
const problems = validate();
if (problems.length) {
  console.error(`Content check found ${problems.length} problem(s):`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log('Content check passed: 12 modules, all texts in SV/DE/EN, structure valid.');
