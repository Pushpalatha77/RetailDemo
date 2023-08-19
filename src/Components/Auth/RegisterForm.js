import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    emailid: '',
    mobilename: '',
    username: '',
    password: '',
    city: '',
    state: '',
    pincode: '',
    area: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform your registration logic here
    console.log(formData);
  };

  return (
    <div className="container mt-5">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailid" className="form-label">
            Email ID
          </label>
          <input
            type="email"
            className="form-control"
            id="emailid"
            name="emailid"
            value={formData.emailid}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mobilename" className="form-label">
            Mobile Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="mobilename"
            name="mobilename"
            value={formData.mobilename}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pincode" className="form-label">
            Pincode
          </label>
          <input
            type="text"
            className="form-control"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="area" className="form-label">
            Area
          </label>
          <input
            type="text"
            className="form-control"
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
