import { mkdtempSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';

export default function createTempDir(): string {
  return mkdtempSync(join(tmpdir(), 'walden-'));
}
