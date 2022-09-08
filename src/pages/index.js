import * as React from 'react';

import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';
import { SEO } from '../components/SEO/seo';

const IndexPage = () => {

  const goToContact = () => {
    navigate('/contact');
  };

  return (
    <>
      <SEO />
      <Layout disablePaddingBottom>
        <Hero
          maxWidth={'500px'}
          image={'/banner1.png'}
          title={"Showing the world your story"}
          ctaText={'get started'}
          ctaAction={goToContact}
        />
        {/* Message Container */}
        <div className={styles.messageContainer}>
          <p>
            We are Empower the Rebel Media Productions. We help individuals and companies showcase their work and products. 
          </p>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
