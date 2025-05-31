 import React from 'react';
import BasicLayouts from '../layout/BasicLayouts';

const ViewPaper = ({ papers = [] }) => (
  <BasicLayouts>
  <div className=" min-h-screen bg-[#F4E8E2] p-6">
    <h2 className="text-2xl font-bold mb-4 text">Submitted Research Papers</h2>
    {papers.length === 0 ? (
      <p className="text-gray-600">No papers uploaded yet.</p>
    ) : (
      <ul className="space-y-4">
        {papers.map((paper, index) => (
          <li key={index} className="border p-4 rounded bg-white shadow">
            <h3 className="font-bold text-lg">{paper.title}</h3>
            <p><strong>Authors:</strong> {paper.authors}</p>
            <p><strong>Abstract:</strong> {paper.abstract}</p>
            <p><strong>Keywords:</strong> {paper.keywords}</p>
            <p><strong>Date:</strong> {paper.date}</p>
          </li>
        ))}
      </ul>
    )}
  </div>
  </BasicLayouts>
);
export default ViewPaper;
