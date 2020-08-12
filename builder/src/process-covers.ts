import { readdirSync, copyFileSync } from 'fs-extra';

import { Product } from './types';

export default function processCovers(
  products: Product[],
  tempDirPath: string,
): Product[] {
  // eslint-disable-next-line no-console
  console.log('Processing cover images…');

  // For each file in cover directory
  readdirSync('./covers').forEach((fileName: string): void => {
    // Extract file name from EAN
    const fileEan = fileName.match(/(\d{13})\.jpg/);

    // Skip files without an EAN in name
    if (!fileEan || !fileEan[1]) {
      // eslint-disable-next-line no-console
      console.warn(`- ${fileName} does not match {ean}.jpg file name pattern`);
      return;
    }

    // Get matching product in catalog
    const product = products.find(({ ean }) => ean === +fileEan[1]);

    // Skip files not maching a product
    if (!product) {
      // eslint-disable-next-line no-console
      console.warn(
        `- ${fileName} does not match any product in catalog with EAN ${fileEan}`,
      );
      return;
    }

    // Create new file name including slug
    const newFileName = `${product.slug}.cover.jpg`;

    // Update product in catalog
    product.coverImage = newFileName;

    // Save image file with slug
    copyFileSync(`./covers/${fileName}`, `${tempDirPath}/${newFileName}`);

    // eslint-disable-next-line no-console
    console.log(`- Added cover file ${newFileName}`);
  });

  return products;
}
