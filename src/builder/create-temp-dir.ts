import { mkdtempSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';

export default function createTempDir(): string {
  const tempDirPath = mkdtempSync(join(tmpdir(), 'elytre-'));
  return tempDirPath;
}
