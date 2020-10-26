import chalk from 'chalk';
import { existsSync, readdirSync, copyFileSync } from 'fs-extra';

import log from './log';

/**
 * Process user custom pages
 * User can add custom pages in the form of .mdx files in a pages/ directory
 * Pages are added to the build and will be imported as MDX
 * in the PageView component
 */
export default function processPages(tempDirPath: string): void {
  // Ignore if pages directory does not exist
  if (!existsSync('./pages')) {
    return;
  }

  // For each file in cover directory
  let processedPagesCount = 0;
  readdirSync('./pages').forEach((fileName: string): void => {
    // Extract file name from EAN
    const matches = fileName.match(/(.*)\.mdx/);

    // Skip files without an EAN in name
    if (!matches) {
      log.warning(
        `File ${chalk.bold(`covers/${fileName}`)} does not match ${chalk.bold(
          '{page-slug}.mdx',
        )} file name pattern`,
      );
      return;
    }

    const pageSlug = matches[1];

    // Create new file name including slug
    const newFileName = `${pageSlug}.page.mdx`;

    // Save image file with slug
    copyFileSync(`./pages/${fileName}`, `${tempDirPath}/${newFileName}`);

    processedPagesCount += 1;
  });

  log.success(`Processed ${processedPagesCount} custom mdx pages`);
}
