import React, { useState } from 'react';
import Button from '../Button';

import FormInputField from '../FormInputField/FormInputField';

import * as styles from './Contact.module.css';

const Contact = (props) => {

  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h4>Send Us A Message</h4>
        <p>
          Let us know how we can help your business.
        </p>
        <p>We look forward to hearing from you.</p>
      </div>
      <div className={styles.section}>
        <h4>Email</h4>
        <p>
          You can email us at email@example.com
          or via the contact form below:
        </p>
      </div>

      <div className={styles.contactContainer}>
        <form name='contact' netlify>
          <div className={styles.contactForm}>
            <FormInputField
              id={'name'}
              type={'text'}
              labelName={'Full Name'}
              required
            />
            <FormInputField
              id={'phone'}
              type={'number'}
              labelName={'Phone Number'}
            />
            <FormInputField
              id={'email'}
              type={'email'}
              labelName={'Email'}
              required
            />
            <div className={styles.commentInput}>
              <FormInputField
                id={'comment'}
                type={'textarea'}
                labelName={'Comments / Questions'}
                required
              />
            </div>
          </div>
          <Button
            className={styles.customButton}
            level={'primary'}
            type={'buttonSubmit'}
          >
            submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
