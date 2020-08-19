import { pathExistsSync } from 'fs-extra';
import { join } from 'path';

/**
 * Tests if requirements are met for build to succeed
 * @throws {Error} if a file is missing
 */
export default function checkRequirements(): void {
  const requiredFiles = ['site.yaml', 'catalog.yaml', 'styles.css'];
  requiredFiles.forEach((file) => {
    if (!pathExistsSync(join('./', file))) {
      throw new Error(
        `Cannot find require file "${file}" in current directory.`,
      );
    }
  });
}