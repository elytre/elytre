import { useParams } from 'react-router-dom';

import { Locale } from '../../shared/types';

export default function usePriceFormatter(price: number): string {
  // Get current locale from route
  const { locale } = useParams<{ locale: Locale }>();

  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
  });
  return formatter.format(price);
}
