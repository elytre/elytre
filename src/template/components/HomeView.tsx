import React from 'react';

import Catalog from './Catalog';

import useCustomPage from '../hooks/use-custom-page';

export default function HomePage(): React.ReactElement {
  const CustomHomePage = useCustomPage('home');

  const homePageContent = CustomHomePage ? <CustomHomePage /> : <Catalog />;

  return <div className="HomePage">{homePageContent}</div>;
}
