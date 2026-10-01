import { mkdir, readdir } from "node:fs/promises";
import { dirname, join, parse } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = join(projectRoot, "public", "wallpapers");
const backgroundDir = join(sourceDir, "optimized");
const thumbnailDir = join(sourceDir, "thumbs");

await mkdir(backgroundDir, { recursive: true });
await mkdir(thumbnailDir, { recursive: true });

const files = (await readdir(sourceDir, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && /\.jpe?g$/i.test(entry.name))
  .map((entry) => entry.name);

for (const file of files) {
  const sourcePath = join(sourceDir, file);
  const outputName = `${parse(file).name}.webp`;

  await sharp(sourcePath)
    .rotate()
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(join(backgroundDir, outputName));

  await sharp(sourcePath)
    .rotate()
    .resize({ width: 480, withoutEnlargement: true })
    .webp({ quality: 70, effort: 4 })
    .toFile(join(thumbnailDir, outputName));

  console.log(`Optimized ${file}`);
}
