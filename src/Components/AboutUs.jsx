import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const AboutUs = () => {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !comment) {
      setMessage('Please fill out all fields.');
      return;
    }

    setIsSending(true);
    emailjs.send(
      'service_d5k53sq',      // Your service ID
      'template_4gl4mdl',     // Your template ID
      { user_email: email, message: comment },
      'EXjJox6W1lAqIrk_1'     // Your public key
    )
      .then(() => {
        setMessage('Message sent successfully!');
        setEmail('');
        setComment('');
      })
      .catch((err) => {
        setMessage('Failed to send message. Please try again later.');
        console.error(err);
      })
      .finally(() => setIsSending(false));
  };

  // Back button handler
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="row justify-content-center animated-background1">
      <div className="container my-5 p-4 bg-light rounded shadow-sm" style={{ maxWidth: '600px' }}>
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="btn btn-outline-secondary mb-4"
          disabled={isSending}
        >
          &larr; Back
        </button>

        <h2 className="mb-4 text-center text-success">About Us & Contact</h2>
        <p className="mb-4 text-secondary">
          Welcome to GizmoXchange—your hub for top tech gadgets at unbeatable prices! From smartphones to laptops, we offer quality products from leading brands. Enjoy exclusive weekend deals and exceptional customer care for a seamless shopping experience. Tech made affordable!
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Your Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSending}
              autoFocus
            />
          </div>

          <div className="mb-3">
            <label htmlFor="comment" className="form-label fw-semibold">Your Comment</label>
            <textarea
              id="comment"
              className="form-control"
              placeholder="Leave your comment"
              rows="5"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              disabled={isSending}
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-100"
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {message && (
          <div
            className={`mt-3 alert ${message.includes('successfully') ? 'alert-success' : 'alert-danger'}`}
            role="alert"
            aria-live="polite"
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
