import { Link } from 'gatsby';
import React, { useState } from 'react';

import Accordion from '../Accordion';
import {Container, Row, Col} from 'react-bootstrap';
import Icon from '../Icons/Icon';
import Button from '../Button';
import Config from '../../config.json';
import * as styles from './Footer.module.css';

const Footer = (prop) => {
  const [email, setEmail] = useState('');

  const handleSocialClick = (platform) => {
    window.open(Config.social[platform]);
  };

  const renderLinks = (linkCollection) => {
    return (
      <ul className={styles.linkList}>
        {linkCollection.links.map((link, index) => {
          return (
            <li key={index}>
              <Link className={`${styles.link} fancy`} to={link.link}>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={styles.root}>
      <Container className={styles.content}>
        <Row className={styles.contentTop}>
          <Col>
            {Config.footerLinks.map((linkCollection, indexLink) => {
              return (
                <div className={styles.footerLinkContainer} key={indexLink}>
                  {/* for web version */}
                  <div className={styles.footerLinks}>
                    <span className={styles.linkTitle}>
                      {linkCollection.subTitle}
                    </span>
                    {renderLinks(linkCollection)}
                  </div>
                  {/* for mobile version */}
                  <div className={styles.mobileFooterLinks}>
                    <Accordion
                      customStyle={styles}
                      type={'add'}
                      title={linkCollection.subTitle}
                    >
                      {renderLinks(linkCollection)}
                    </Accordion>
                  </div>
                </div>
              );
            })}
          </Col>
          <Col>
            <div className={styles.socialContainer}>
              {Config.social.youtube && (
                <div
                  onClick={() => handleSocialClick('youtube')}
                  role={'presentation'}
                  className={styles.socialIconContainer}
                >
                  <Icon symbol={'youtube'}></Icon>
                </div>
              )}
              {Config.social.instagram && (
                <div
                  onClick={() => handleSocialClick('instagram')}
                  role={'presentation'}
                  className={styles.socialIconContainer}
                >
                  <Icon symbol={'instagram'}></Icon>
                </div>
              )}
              {Config.social.facebook && (
                <div
                  onClick={() => handleSocialClick('facebook')}
                  role={'presentation'}
                  className={styles.socialIconContainer}
                >
                  <Icon symbol={'facebook'}></Icon>
                </div>
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.contentBottom}>
              <div className={styles.copyrightContainer}>
                <span>
                  {new Date().getFullYear()} ©. All rights owned by Empower the Rebel LLC. Built by {' '}
                  <Button target={true} href="https://acookson95.github.io/portfolio/">
                    Aaron Cookson
                  </Button>{' '}
                  using Gatsby JS.
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
