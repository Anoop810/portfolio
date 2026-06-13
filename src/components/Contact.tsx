import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import TextField from '@mui/material/TextField';
import '../assets/styles/Contact.scss';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

const contactLinks = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'anoopsonawane810@gmail.com',
    href: null,
    copyable: true,
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'anoopsonawane',
    href: 'https://www.linkedin.com/in/anoopsonawane',
  },
  {
    icon: <GitHubIcon />,
    label: 'GitHub',
    value: 'Anoop810',
    href: 'https://github.com/Anoop810',
  },
  {
    icon: <LocationOnIcon />,
    label: 'Location',
    value: 'Mumbai, India',
    href: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [sending, setSending] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setSubmitError('Could not copy email. Use the contact form instead.');
    }
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    const hasNameError = name.trim() === '';
    const hasEmailError = email.trim() === '';
    const hasMessageError = message.trim() === '';

    setNameError(hasNameError);
    setEmailError(hasEmailError);
    setMessageError(hasMessageError);

    if (hasNameError || hasEmailError || hasMessageError) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setSubmitError(
        'EmailJS is not configured. Add your keys to a .env file and restart the dev server.'
      );
      return;
    }

    setSending(true);

    const templateParams = {
      from_name: name.trim(),
      from_email: email.trim(),
      reply_to: email.trim(),
      message: message.trim(),
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitError(
        'Something went wrong while sending your message. Please try again or email me directly.'
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div id="contact" className="contact-section" ref={sectionRef}>
      <div className="items-container">
        <motion.div
          className="contact_wrapper"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div className="contact_header" variants={itemVariants}>
            <span className="contact_eyebrow">Get in touch</span>
            <h1>Contact Me</h1>
            <p>
              Got a project waiting to be realized? Let&apos;s collaborate and
              make it happen.
            </p>
          </motion.div>

          <div className="contact_grid">
            <motion.div className="contact_info" variants={containerVariants}>
              {contactLinks.map((link) => (
                <motion.div
                  key={link.label}
                  className="contact_info-card"
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="contact_info-icon">{link.icon}</div>
                  <div className="contact_info-text">
                    <span className="contact_info-label">{link.label}</span>
                    {'copyable' in link && link.copyable ? (
                      <button
                        type="button"
                        className="contact_copy-email"
                        onClick={() => copyEmail(link.value)}
                      >
                        {copiedEmail ? 'Copied!' : link.value}
                      </button>
                    ) : link.href ? (
                      <a href={link.href} target="_blank" rel="noreferrer">
                        {link.value}
                      </a>
                    ) : (
                      <span>{link.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="contact_form-card" variants={itemVariants}>
              {submitted ? (
                <motion.div
                  className="contact_success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <CheckCircleOutlineIcon className="contact_success-icon" />
                  <h3>Message sent!</h3>
                  <p>Thanks for reaching out. I&apos;ll get back to you soon.</p>
                  <button
                    type="button"
                    className="contact_send-btn contact_send-btn--secondary"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  className="contact-form"
                  onSubmit={sendEmail}
                  noValidate
                >
                  <div className="form-flex">
                    <TextField
                      required
                      label="Your Name"
                      placeholder="What's your name?"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      error={nameError}
                      helperText={nameError ? 'Please enter your name' : ''}
                      fullWidth
                      className="contact-field"
                    />
                    <TextField
                      required
                      label="Email / Phone"
                      placeholder="How can I reach you?"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={emailError}
                      helperText={
                        emailError ? 'Please enter your email or phone number' : ''
                      }
                      fullWidth
                      className="contact-field"
                    />
                  </div>
                  <TextField
                    required
                    label="Message"
                    placeholder="Tell me about your project or idea..."
                    multiline
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    error={messageError}
                    helperText={messageError ? 'Please enter your message' : ''}
                    fullWidth
                    className="contact-field body-form"
                  />

                  {submitError && (
                    <div className="contact_error" role="alert">
                      <ErrorOutlineIcon />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    className="contact_send-btn"
                    disabled={sending}
                    whileHover={{ scale: sending ? 1 : 1.03 }}
                    whileTap={{ scale: sending ? 1 : 0.97 }}
                  >
                    {sending ? (
                      <span className="contact_send-loading">Sending...</span>
                    ) : (
                      <>
                        Send Message
                        <SendIcon />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
