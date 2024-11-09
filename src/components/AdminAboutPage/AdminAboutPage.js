import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminAboutPage.css';

const AdminAboutPage = () => {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/about');
        setContent(response.data.content);
      } catch (error) {
        console.error("Error fetching about content:", error);
      }
    };

    fetchContent();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5002/api/admin/about/update', { content });
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error updating content:", error);
    }
  };

  return (
    <div className="admin-about-container">
      <h1>Admin - Update About Content</h1>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleUpdate}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="10"
          placeholder="Enter about content"
        ></textarea>
        <button type="submit">Update Content</button>
      </form>
    </div>
  );
};

export default AdminAboutPage;
