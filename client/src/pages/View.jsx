import { useEffect, useState } from "react";

const View = () => {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cmsPapers")) || [];
    setPapers(stored);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedPapers = papers.filter((_, index) => index !== indexToDelete);
    setPapers(updatedPapers);
    localStorage.setItem("cmsPapers", JSON.stringify(updatedPapers));
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">View Uploaded Papers</h1>
      {papers.length === 0 ? (
        <p className="text-center text-gray-600">No papers uploaded yet.</p>
      ) : (
        <div className="space-y-6">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded border border-gray-200 relative"
            >
              <button
                onClick={() => handleDelete(index)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                &#x2715;
              </button>
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                {paper.title}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Authors:</strong> {paper.authors}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Publication Date:</strong> {paper.date}
              </p>
              <p className="text-gray-700 mb-2">
                {paper.abstract.length > 200
                  ? paper.abstract.substring(0, 200) + "..."
                  : paper.abstract}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Keywords:</strong> {paper.keywords}
              </p>
              {paper.file && (
                <p className="text-sm text-gray-500 mt-2 italic">
                  File Uploaded: {paper.file.name}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default View;
