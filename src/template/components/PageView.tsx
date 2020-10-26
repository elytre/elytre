import React from 'react';
import { useParams } from 'react-router-dom';

import Error404View from './Error404View';

import useCustomPage from '../hooks/use-custom-page';

type RouteProps = {
  slug: string;
};

export default function PageView(): React.ReactElement {
  const { slug } = useParams<RouteProps>();
  const Page = useCustomPage(slug);

  // If no page was found for that slug
  if (Page === null) {
    const reason = `Cannot find a custom page with slug ${slug}`;
    return <Error404View reason={reason} />;
  }

  return (
    <div className="PageView">
      <Page />
    </div>
  );
}
