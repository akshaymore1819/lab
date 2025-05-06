import React, { useState } from 'react';
import './Upload.css';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFile = (f) => {
    if (f && f.length > 0) {
      setFile(f[0]);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    handleFile(e.target.files);
  };

  return (
    <div className="upload-container">
      <h2>Upload Your Document</h2>
      <div
        className={`dropzone ${dragActive ? 'active' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <p>Drag & drop your file here</p>
        <p>or</p>
        <label className="upload-label">
          Browse
          <input type="file" onChange={handleChange} hidden />
        </label>
      </div>
      {file && (
        <div className="file-info">
          <strong>Selected File:</strong> {file.name}
        </div>
      )}
    </div>
  );
};

export default Upload;
