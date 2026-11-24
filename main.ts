import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "One star. He vacuumed my favourite sunbeam spot, then apologised to the rug. The rug. Not me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
