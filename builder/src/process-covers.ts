import chalk from 'chalk';
import { existsSync, readdirSync, copyFileSync } from 'fs-extra';

import log from './log';
import { Product } from '../../shared/types';

export default function processCovers(
  products: Product[],
  tempDirPath: string,
): Product[] {
  let processCoversCount = 0;

  // Ignore if covers directory does not exist
  if (!existsSync('./covers')) {
    return products;
  }

  // For each file in cover directory
  readdirSync('./covers').forEach((fileName: string): void => {
    // Extract file name from EAN
    const matches = fileName.match(/(\d{13})\.jpg/);

    // Skip files without an EAN in name
    if (!matches) {
      log.warning(
        `File ${chalk.bold(`covers/${fileName}`)} does not match ${chalk.bold(
          '{ean}.jpg',
        )} file name pattern`,
      );
      return;
    }

    const fileEan = matches[1];

    // Get matching product in catalog
    const product = products.find(({ ean }) => ean === +fileEan);

    // Skip files not maching a product
    if (!product) {
      log.warning(
        `File ${chalk.bold(
          `covers/${fileName}`,
        )} does not match any product in catalog with EAN ${chalk.bold(
          fileEan,
        )}`,
      );
      return;
    }

    // Create new file name including slug
    const newFileName = `${product.slug}.cover.jpg`;

    // Update product in catalog
    product.coverImage = newFileName;

    // Save image file with slug
    copyFileSync(`./covers/${fileName}`, `${tempDirPath}/${newFileName}`);
    processCoversCount += 1;
  });

  log.success(`Processed ${processCoversCount} cover images`);

  return products;
}
