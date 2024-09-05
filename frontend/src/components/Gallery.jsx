import React from "react";

const Gallery = () => {
  const gallery = [
    "/cal5.avif",
    "/cal6.avif",
    "/img3.jpg",
    "/cal10.avif",
    "/cal8.avif",
    "/img8.jpg",
    "/img5.jpg",
    "/cal9.avif",
    "/video2.mp4"
  ];
  return (
    <section className="gallery">
      <h1>USE GYM BETTER HEALTH</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
