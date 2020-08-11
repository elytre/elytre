import { mkdtempSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';

const tempDirPath = mkdtempSync(join(tmpdir(), 'walden-'));

export default function getTempDir(): string {
  return tempDirPath;
}
