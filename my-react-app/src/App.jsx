import React, { useState } from 'react';
import './App.css';

function SlamBook() {
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    address: '',
    phoneNumber: '',
    gender: 'male',
    favoriteActor: '',
    school: '',
    hobby: '',
    bio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    // You can process the form data here or send it to an API
  };

  return (
    <div className="slambook-container">
      <h1>Student Slam Book</h1>
      <form onSubmit={handleSubmit} className="slambook-form">
        <label htmlFor="name">
          <span>Name:</span>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </label>
        <label htmlFor="nickname">
          <span>Nickname:</span>
          <input
            id="nickname"
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="Enter your nickname"
          />
        </label>
        <label htmlFor="address">
          <span>Address:</span>
          <input
            id="address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
          />
        </label>
        <label htmlFor="phoneNumber">
          <span>Phone Number:</span>
          <input
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </label>
        <label htmlFor="gender">
          <span>Gender:</span>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label htmlFor="favoriteActor">
          <span>Favorite Actor:</span>
          <input
            id="favoriteActor"
            type="text"
            name="favoriteActor"
            value={formData.favoriteActor}
            onChange={handleChange}
            placeholder="Enter your favorite actor"
          />
        </label>
        <label htmlFor="school">
          <span>School:</span>
          <input
            id="school"
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            placeholder="Enter your school name"
            required
          />
        </label>
        <label htmlFor="hobby">
          <span>Hobbies:</span>
          <input
            id="hobby"
            type="text"
            name="hobby"
            value={formData.hobby}
            onChange={handleChange}
            placeholder="What do you love doing?"
          />
        </label>
        <label htmlFor="bio">
          <span>Short Bio:</span>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell us a little about yourself..."
            rows="4"
          />
        </label>
        <div className="form-actions">
          <button type="submit" className="submit-btn">Submit</button>
          <button type="reset" className="reset-btn">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default SlamBook;
