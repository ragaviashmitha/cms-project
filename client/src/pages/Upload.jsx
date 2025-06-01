import { useState, useContext } from "react";
import { AuthContext } from "../routes/AuthContext";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    abstract: "",
    keywords: "",
    date: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAuth) {
      alert("Please log in to upload papers.");
      navigate("/signin");
      return;
    }

    const storedPapers = JSON.parse(localStorage.getItem("cmsPapers")) || [];
    storedPapers.push(formData);
    localStorage.setItem("cmsPapers", JSON.stringify(storedPapers));

    alert("Paper uploaded successfully!");
    setFormData({
      title: "",
      authors: "",
      abstract: "",
      keywords: "",
      date: "",
      file: null,
    });
  };

  return (
    <div className="p-5 min-w-3xl mx-auto mt-5 ">
      <h1 className="text-2xl font-semibold mb-8 text-center">Upload Research Paper</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Paper Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
          required
        />
        <input
          type="text"
          name="authors"
          placeholder="Author(s)"
          value={formData.authors}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
          required
        />
        <textarea
          name="abstract"
          placeholder="Abstract"
          value={formData.abstract}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
          rows="4"
          required
        ></textarea>
        <input
          type="text"
          name="keywords"
          placeholder="Keywords"
          value={formData.keywords}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
          required
        />
        <input
          type="file"
          name="file"
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
          accept="application/pdf"
        />
        <div className="flex justify-between">
          <button
            type="submit"
            className=" bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => navigate("/view")}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            View Papers
          </button>
        </div>
      </form>
    </div>
  );
};

export default Upload;