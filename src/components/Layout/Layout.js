import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as styles from './Layout.module.css';


import './Globals.css';

const Layout = ({ children = false }) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
