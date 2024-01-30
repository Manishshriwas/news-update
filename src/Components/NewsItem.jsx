import React from 'react';
import image from '../assests/w1.jpg'

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img src={src?src:image} className="card-img-top" alt={title || "News Image"} style={{ height: "200px", width: "100%", objectFit: "cover" }} />
      <div className="card-body">
      <h5 className="card-title">{(title || "Default Title").slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "In a groundbreaking development, scientists have achieved a major breakthrough in clean energy research, paving the way for more sustainable and environmentally friendly solutions."}</p>
        <a href={url} className="btn btn-primary" >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
