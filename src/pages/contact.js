import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import * as styles from './contact.module.css';

import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Layout from '../components/Layout/Layout';
import Container from '../components/Container';

const ContactPage = (props) => {

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <div className={styles.pageContainer}>
          <Container size={'large'} spacing={'min'}>
            <Contact />
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
