import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header';

export default function NotFoundPage() {
  const notFoundWrapperStyle = {
    width: '420px',
    marginTop: '16.7vh',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingTop: '94px',
    textAlign: 'center' as const,
    backgroundImage: 'url(../img/ico-no-results.svg)',
    backgroundSize: '60px 73px',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat'
  };
  const notFoundStyle = {
    display: 'block',
    marginBottom: '5px',
    fontSize: '32px',
    lineHeight: 1.1875
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>6 Cities : Error page</title>
      </Helmet>
      <Header />
      <div style={notFoundWrapperStyle}>
        <b style={notFoundStyle}>404. Page not found</b>
        <Link to="/">Go to main.</Link>
      </div>
    </React.Fragment>
  );
}
