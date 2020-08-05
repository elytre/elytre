import React from 'react';

import site from '../site.json';

export default function Title(): React.ReactElement {
  return <h1>{site.title}</h1>;
}
