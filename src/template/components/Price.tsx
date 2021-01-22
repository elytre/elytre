import React from 'react';

import usePriceFormatter from '../hooks/use-price-formatter';

type PriceProps = {
  children: number;
};

export default function Trans({ children }: PriceProps): React.ReactElement {
  const formattedPrice = usePriceFormatter(children);

  return <>{formattedPrice}</>;
}
