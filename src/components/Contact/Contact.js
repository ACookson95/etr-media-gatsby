import React, { useState } from 'react';
import { Container, Form, Button, Stack } from 'react-bootstrap';
import NumberFormat from 'react-number-format'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default function Contact() {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => alert("Thanks for contacting us. We'll get with you soon"))
      .catch((error) => alert(error));
  };

  return (
    <Container>
      <h1>Contact</h1>
      <Form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <Stack gap={2}>
          <Form.Group>
            <Form.Label>Your Name:</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Your Email:</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Your Phone Number:</Form.Label>
            <Form.Control as={NumberFormat} allowEmptyFormatting format="(###) ###-####" mask="_" name="number" onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message:</Form.Label>
            <Form.Control
              Required
              as="textarea"
              type="text"
              name="comments"
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit">Send</Button>
        </Stack>
      </Form>
    </Container>
  );
}
