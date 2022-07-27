import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {

  const goToContact = () => {
    navigate('/contact');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
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
