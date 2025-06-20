// 📁 src/components/HubSpotForm.js
'use client';

import { useState, useEffect } from 'react';

export default function CustomForm() {
  const ADMINS = ['Abie'];

  function getNextAdmin() {
    try {
      const key = 'lastAdminIndex';
      const last = parseInt(localStorage.getItem(key) || '-1', 10);
      const next = ((isNaN(last) ? -1 : last) + 1) % ADMINS.length;
      localStorage.setItem(key, next.toString());
      return ADMINS[next];
    } catch {
      return ADMINS[0];
    }
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    assignedAdmin: '',
    origin: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [admin, setAdmin] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  useEffect(() => {
    setSubmitted(false);

    const getAdNumberFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      return (
        params.get('utm_campaign') ||
        params.get('hsa_cam') ||
        params.get('campaignid') ||
        null
      );
    };

    const adNumber = getAdNumberFromUrl();


    if (adNumber && adNumber.trim() !== '') {
      fetch('https://api.raalc.ae/api/get_ad_name', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ad_number: adNumber })
      })
        .then(res => res.json())
        .then(data => {
          if (data.data) {
            setFormData(prev => ({ ...prev, origin: data.data }));
          } else {
            setFormData(prev => ({ ...prev, origin: 'Organic' }));
          }
        })
        .catch(() => {
          setFormData(prev => ({ ...prev, origin: 'Organic' }));
        });
    } else {
      setFormData(prev => ({ ...prev, origin: 'Organic' }));
    }
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!emailPattern.test(formData.email)) newErrors.email = 'Enter a valid email.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const selectedAdmin = getNextAdmin();
    const payload = {
      ...formData,
      assignedAdmin: selectedAdmin,
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      timestamp: new Date().toISOString()
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await res.json();

      if (!res.ok || result.ok === false) {
        throw new Error(result.message || `Status ${res.status}`);
      }

      setAdmin(selectedAdmin);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '', assignedAdmin: '', origin: '' });
      setErrors({});
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  const fieldStyle = (field) => ({
    width: '100%',
    border: 'none',
    borderBottom: `2px solid ${errors[field] ? 'red' : '#d1d9e0'}`,
    padding: '0.5rem 0',
    outline: 'none'
  });

  const containerStyle = {
    maxWidth: '600px',
    margin: '1rem auto',
    background: '#fff',
    padding: '1.5rem',
  };

  const fieldWrapper = {
    marginBottom: '1rem',
    textAlign: 'left'
  };

  const labelStyle = {
    display: 'block',
    fontWeight: '500',
    marginBottom: '0.25rem'
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} noValidate>
        {['name', 'email', 'phone', 'message'].map((field) => (
          <div key={field} style={fieldWrapper}>
            <label style={labelStyle} htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)}*
            </label>
            {field !== 'message' ? (
              <input
                id={field}
                name={field}
                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                value={formData[field]}
                onChange={handleChange}
                style={fieldStyle(field)}
              />
            ) : (
              <textarea
                id={field}
                name={field}
                rows={1}
                value={formData[field]}
                onChange={handleChange}
                style={fieldStyle(field)}
              />
            )}
            {errors[field] && (
              <span style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                {errors[field]}
              </span>
            )}
          </div>
        ))}

        <button
          type="submit"
          style={{
            background: '#d4af37',
            width: '100%',
            color: '#fff',
            border: 'none',
            padding: '0.75rem',
            fontSize: '1rem',
            fontWeight: '600',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Submit
        </button>

        {submitted && admin && (
          <p style={{ marginTop: '3rem', color: '#333' }}>
            Thank you! We will contact you shortly.
          </p>
        )}
      </form>
    </div>
  );
}