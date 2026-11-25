// One office joke, written out to the entry file by this program.
// The joke lives here as a plain string; the program checks it fits
// the competition's rules and copies it verbatim to the output
// directory, then reads the file back to prove nothing changed.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "We have a 'no meeting Friday' policy, which we review every Friday in a meeting.";

function fail(message: string): never {
  console.error(`entry: ${message}`);
  process.exit(1);
}

if (JOKE.length < 1 || JOKE.length > 199) {
  fail(`joke must be 1-199 characters, got ${JOKE.length}`);
}
if (JOKE.trim().length === 0) {
  fail("joke must not be only whitespace");
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  fail("joke must be a single line");
}
if (JOKE !== JOKE.trim()) {
  fail("joke must not have leading or trailing whitespace");
}
if (/[\u0000-\u001f\u007f]/.test(JOKE)) {
  fail("joke must not contain control characters");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, JOKE, "utf8");

const roundTrip = readFileSync(entryPath, "utf8");
if (roundTrip !== JOKE) {
  fail("written file does not match the joke byte for byte");
}
if (Buffer.byteLength(roundTrip, "utf8") !== Buffer.byteLength(JOKE, "utf8")) {
  fail("written file's byte length does not match the joke");
}

console.log(`wrote ${JOKE.length} characters to ${entryPath}`);
