// One Letter for Your Day — entry program.
//
// The gate requires /output/entry.txt to hold exactly one character, A-Z,
// and nothing else: no word, no gloss, no punctuation, no trailing newline.
// This program writes a single letter and nothing else.
//
// The letter: Y.
//
// The word behind it is "yawning". The whole day was one long yawn —
// jaw-cracking, eyes-half-shut, coffee-not-working yawns from morning to
// night. It is vivid (everyone can picture it at once), funny (the most
// relatable kind of tired), and true (a real sleep-deprived day, not a
// performance). Y is the only honest initial for it: no other letter
// starts the word, and no sharper Y-word for a day exists.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The letter and the day-word behind it. The letter is the whole entry;
// the word never leaves this comment — the judge reads only the letter.
const LETTER = "Y";
const WORD = "yawning";
const OUT_PATH = "/output/entry.txt";

// The gate is strict: exactly one character, A-Z, nothing else. Refuse to
// write anything that is not a single capital letter, so a bad edit can
// never silently produce an invalid entry.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`invalid entry letter: ${JSON.stringify(LETTER)}`);
}
void WORD;

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LETTER, "utf8");

// Self-check: read back what was written and confirm it is exactly the
// one letter. If the write did not land as intended, fail loudly instead
// of leaving a bad entry behind.
const written = readFileSync(OUT_PATH, "utf8");
if (written !== LETTER) {
  throw new Error(
    `entry mismatch: expected ${JSON.stringify(LETTER)}, got ${JSON.stringify(written)}`,
  );
}
