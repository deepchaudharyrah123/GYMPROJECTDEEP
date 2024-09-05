import React from 'react';

const ImageGallery = () => {
  const images = new Array(10).fill('https://via.placeholder.com/150x150');

  return (
    <div className="image-gallery">
      <h2>Image Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Image ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
