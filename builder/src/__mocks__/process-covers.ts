import { Product } from '../../../shared/types';

export default function processCovers(products: Product[]): Product[] {
  const [product0, ...others] = products;
  return [{ ...product0, coverImage: 'cover-image.jpg' }, ...others];
}
