import React, { useState, useEffect } from 'react';
import './BookNow.css';

const BookNow = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    age: '',
    gender: '',
    relation: '',
    phone: '',
    email: ''
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const [members, setMembers] = useState(() => {
    const saved = localStorage.getItem('familyMembers');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('familyMembers', JSON.stringify(members));
  }, [members]);

  const validateField = (name, value) => {
    let error = '';
    const validationPatterns = {
      fullName: /^[a-zA-Z ]{2,30}$/,
      dob: /^\d{2}-\d{2}-\d{4}$/,
      age: value => value > 0 && value <= 120,
      phone: /^\d{10}$/,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    };

    if (!value.trim() && name !== 'phone' && name !== 'email') {
      error = 'This field is required';
    } else {
      switch(name) {
        case 'fullName':
          if (!validationPatterns.fullName.test(value)) error = 'Invalid name';
          break;
        case 'dob':
          if (!validationPatterns.dob.test(value)) error = 'Use dd-mm-yyyy';
          break;
        case 'age':
          if (!validationPatterns.age(value)) error = 'Invalid age (1-120)';
          break;
        case 'phone':
          if (value && !validationPatterns.phone.test(value)) error = 'Invalid phone';
          break;
        case 'email':
          if (value && !validationPatterns.email.test(value)) error = 'Invalid email';
          break;
        default:
          break;
      }
    }

    setErrors(prev => ({ ...prev, [name]: error }));
    return !error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  useEffect(() => {
    setIsFormValid(
      Object.keys(errors).every(k => !errors[k]) &&
      ['fullName', 'dob', 'age', 'gender', 'relation'].every(field => formData[field])
    );
  }, [errors, formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setMembers(prev => [...prev, { id: Date.now(), ...formData }]);
      setSuccessMessage('Member added successfully! 🎉');
      setFormData({
        fullName: '', dob: '', age: '', gender: '',
        relation: '', phone: '', email: ''
      });
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">
          <span className="form-icon">👨👩👧👦</span>
          Add Family Member
        </h2>

        {successMessage && (
          <div className="success-message animate-pop">
            <div className="success-icon">✓</div>
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="form-body">
          {[
            { label: 'Full Name*', name: 'fullName', type: 'text', placeholder: 'John Doe' },
            { label: 'Date of Birth*', name: 'dob', type: 'text', placeholder: 'dd-mm-yyyy' },
            { label: 'Age*', name: 'age', type: 'number', placeholder: '25' },
            { label: 'Gender*', name: 'gender', type: 'select', options: ['Male', 'Female', 'Other'] },
            { label: 'Relation*', name: 'relation', type: 'select', options: ['Self', 'Father', 'Mother', 'Child', 'Spouse'] },
            { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '1234567890' },
            { label: 'Email', name: 'email', type: 'email', placeholder: 'john@example.com' },
          ].map((field, index) => (
            <div 
              key={field.name}
              className={`form-group animate-slide delay-${index}`}
            >
              <label>{field.label}</label>
              {field.type === 'select' ? (
                <select
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className={errors[field.name] ? 'error' : ''}
                >
                  <option value="">Select {field.label.replace('*', '')}</option>
                  {field.options.map(opt => (
                    <option key={opt} value={opt.toLowerCase()}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className={errors[field.name] ? 'error' : ''}
                  placeholder={field.placeholder}
                />
              )}
              {errors[field.name] && (
                <span className="error-message animate-error">
                  {errors[field.name]}
                </span>
              )}
            </div>
          ))}

          <button 
            type="submit" 
            className={`submit-btn ${isFormValid ? 'active' : 'disabled'}`}
            disabled={!isFormValid}
          >
            Add Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
