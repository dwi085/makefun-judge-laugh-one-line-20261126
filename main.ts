// Make the Judge Laugh in One Line — make.fun entry.
// This program writes one original funny line (1-200 characters)
// to /output/entry.txt, where the sealed gate scorer reads it.
//
// The line: a tiny story with a punchline. It sets up a romantic
// expectation ("finally met my soulmate") and breaks it with a
// painfully relatable twist (matched on mutual avoidance), then
// lands the laugh at the very end. No stock joke, no pun anyone
// has heard, no context needed to get it in one read.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I finally met my soulmate on a dating app \u2014 we matched instantly on the fact that neither of us was going to message first.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;
const MAX_CHARS = 200;

function checkLine(text: string): void {
  const trimmed = text.trim();
  if (trimmed.length < 1 || trimmed.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${trimmed.length}`,
    );
  }
  if (trimmed !== text) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
}

function writeEntry(): void {
  checkLine(LINE);
  // Create /output if it is missing, but never delete the directory
  // itself: the grader runs as an unprivileged user and removing
  // /output would make its write fail with EPERM.
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, LINE, "utf8");
  console.log(`wrote ${LINE.length} characters to ${OUT_FILE}`);
}

writeEntry();

