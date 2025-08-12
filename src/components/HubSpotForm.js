// 📁 src/components/HubSpotForm.js
'use client';

import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function CustomForm() {
  const ADMINS = [ 'Abie'];

async function getNextAdmin() {
  try {
    const res = await fetch('https://api.raalc.ae/api/landing_pages_counter');
    const data = await res.json();

    const index = typeof data.counter === 'number' ? data.counter % ADMINS.length : 0;
    return ADMINS[index];
  } catch (e) {
    console.warn('Failed to fetch counter from API, defaulting to first admin');
    return ADMINS[0]; // fallback
  }
}



  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
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
           if (data && data.ad_name) {
            setFormData(prev => ({ ...prev, origin: data.ad_name }));
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
    if (!formData.first_name.trim()) newErrors.first_name = 'First Name is required.';
    if (!formData.last_name.trim()) newErrors.last_name = 'Last Name is required.';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!emailPattern.test(formData.email)) newErrors.email = 'Enter a valid email.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

   const getQueryParam = (param) => {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  return null;
};

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  const selectedAdmin = await getNextAdmin(); // NOTE: await here
  const payload = {
    ...formData,
    name: `${formData.first_name || ''} ${formData.last_name || ''}`.trim(),
    assignedAdmin: selectedAdmin,
    pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      timestamp: new Date().toISOString(),
    ...(getQueryParam('utm_campaign') && { utm_campaign: getQueryParam('utm_campaign') }),
    ...(getQueryParam('utm_source') && { utm_source: getQueryParam('utm_source').replace(/_/g, ' ') }),
    source: "Form Submission"
  };

delete payload.first_name;
delete payload.last_name;

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
    setFormData({ first_name: '', last_name: '', email: '', phone: '', message: '', assignedAdmin: '', origin: '' });
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
  {['名 / 名字', '姓', '电子邮箱', '电话号码', '留言内容'].map((field) => (
    field === '名 / 名字' ? (
      // -------- Name Group (First + Last) --------
      <div key="name-group" className="name-group">
        {/* First Name */}
        <div className="name-field" style={{marginBottom: 20}}>
          <label  style={{ ...labelStyle, textAlign: 'left' }} htmlFor="first_name">名 / 名字*</label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            value={formData.first_name || ''}
            onChange={handleChange}
            style={fieldStyle('first_name')}
          />
          {errors.first_name && (
            <span style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block', textAlign: "left" }}>
              {errors.first_name}
            </span>
          )}
        </div>

        {/* Last Name */}
        <div className="name-field">
          <label style={{ ...labelStyle, textAlign: 'left' }} htmlFor="last_name">姓*</label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            value={formData.last_name || ''}
            onChange={handleChange}
            style={fieldStyle('last_name')}
          />
          {errors.last_name && (
            <span style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block', textAlign: "left" }}>
              {errors.last_name}
            </span>
          )}
        </div>
      </div>
    ) : field === 'last_name' ? null : (
      // -------- All Other Fields --------
      <div key={field} style={fieldWrapper}>
        <label style={labelStyle} htmlFor={field}>
          {field
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')}*
        </label>

        {field !== 'message' ? (
          field === 'phone' ? (
            <PhoneInput
              country="ae"
              style={{ padding: 0, fontSize: 16, marginTop: 20 }}
              value={formData.phone || ''}
              onChange={(val) =>
                setFormData(prev => ({ ...prev, phone: val }))
              }
              inputProps={{
                name: 'phone',
                id: 'phone',
                required: true
              }}
              containerStyle={{
                ...fieldStyle(field),
                width: '100%',
                display: 'flex',
                alignItems: 'center'
              }}
              inputStyle={{
                width: '100%',
                height: '52px',
                fontSize: '16px',
                borderTopRightRadius: '4px',
                borderBottomRightRadius: '4px',
                paddingLeft: '60px'
              }}
              buttonStyle={{
                height: '52px',
                borderTopLeftRadius: '4px',
                borderBottomLeftRadius: '4px',
                borderRight: '1px solid #ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 6px'
              }}
            />
          ) : (
            <input
              id={field}
              name={field}
              type={field === 'email' ? 'email' : 'text'}
              value={formData[field] || ''}
              onChange={handleChange}
              style={fieldStyle(field)}
            />
          )
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
    )
  ))}

  {/* Submit Button */}
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
