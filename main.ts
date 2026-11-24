// Funniest Time Machine Warning Label — entry for
// u-eager-stork-81-9647-funniest-time-machine-warning-f8add151.
// Writes one warning label (91 chars) to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";

const LABEL =
  "WARNING: This machine has no reverse gear. If you meet yourself, do not make eye contact.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Gate guard: the entry must be 1-120 characters of non-whitespace text.
if (LABEL.length < 1 || LABEL.length > 120 || LABEL.trim().length === 0) {
  throw new Error(`entry length ${LABEL.length} is outside the 1-120 char gate`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LABEL, "utf8");
