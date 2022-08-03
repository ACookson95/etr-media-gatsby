import * as React from 'react';

import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {

  const goToContact = () => {
    navigate('/contact');
  };

  return (
    <Layout disablePaddingBottom>
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'}
        title={"Website in development. More coming soon!"}
        subtitle={"Let us help you tell the world your story"}
        ctaText={'get a quote'}
        ctaAction={goToContact}
      />
      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
          We are Empower the Rebel Media Productions. We help individuals and companies showcase their work and products. 
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
