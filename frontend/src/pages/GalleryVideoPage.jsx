import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const GalleryVideoPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); 
  };

  return (
    <div className="gallery-video-page">
      <h1>Video Gallery</h1>
      <div className="video-gallery">
        <video width="320" height="240" controls autoPlay>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video width="320" height="240" controls autoPlay>
          <source src="/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video width="320" height="240" controls autoPlay>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video width="320" height="240" controls autoPlay>
          <source src="/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <button onClick={handleBackClick} className='btn btn-warning'>Back to Main Page</button>
    </div>
  );
};

export default GalleryVideoPage;
