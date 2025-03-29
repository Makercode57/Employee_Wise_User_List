import React, { useState } from "react";

function UserForm({ initialData, onSubmit, buttonText, id }) {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    avatar: initialData.avatar || "",
    file: null, 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      const imageUrl = URL.createObjectURL(file); 
      setFormData({ ...formData, avatar: imageUrl, file }); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e, formData); 
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="form-group">
        <label>Profile Picture:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {formData.avatar && (
          <img src={formData.avatar} alt="Profile Preview" className="profile-preview" />
        )}
      </div>

      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">{buttonText}</button>
    </form>
  );
}

export default UserForm;
