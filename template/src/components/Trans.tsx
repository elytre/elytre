import React from 'react';

import useTrans from '../hooks/use-trans';

type TransProps = {
  children: string;
};

export default function Trans({ children }: TransProps): React.ReactElement {
  const text = useTrans(children);

  return <>{text}</>;
}
