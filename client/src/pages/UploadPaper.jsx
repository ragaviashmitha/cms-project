

import React, { useState } from 'react';
import { Link } from 'react-router';

const UploadPaper = ({ papers, setPapers }) => {
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    abstract: '',
    keywords: '',
    date: '',
    pdf: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setPapers([...papers, formData]);
    alert("Paper submitted successfully!");
    setFormData({ title: '', authors: '', abstract: '', keywords: '', date: '', pdf: '' });
  };

  return (
    <div className="min-h-screen bg-[#F4E8E2] flex flex-col items-center justify-center px-4 text-center">
      <h2 className="text-2xl font-bold mb-6">Upload Research Paper</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-full max-w-xl"
      >
        {['title', 'authors', 'abstract', 'keywords', 'date'].map(field => (
          <input
            key={field}
            type={field === 'date' ? 'date' : 'text'}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        ))}
        <input
          type="file"
          name="pdf"
          onChange={e => setFormData({ ...formData, pdf: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded"
        />
        <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
        <button
            type="button"
            onClick={() => navigate("/view")}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            <Link to={'/view'}>
            View Papers
            </Link>
          </button>
          </div>
      </form>
    </div>
  );
};

export default UploadPaper;






