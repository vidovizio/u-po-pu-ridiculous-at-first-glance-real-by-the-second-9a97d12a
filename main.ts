import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

// The pitch: one sentence, 192 characters.
// Absurd on first read (who buys used snakeskin?), then the arithmetic lands:
// salons pay $60 for a set that needs a dime of material, and clients can tell.
const sentence = "We take shed snakeskin off pet shops' hands free, sort by scale size, sell by the gram to nail salons: a $60 'real reptile' set costs a dime, and clients spot a decal from a scale.";

// Absolute path so the output never depends on the working directory.
const outputDir = resolve('/output');

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

writeFileSync(resolve(outputDir, 'entry.txt'), sentence, 'utf8');
