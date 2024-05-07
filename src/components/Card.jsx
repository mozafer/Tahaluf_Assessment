import React from "react";

import "./Card.css";
import { Link, useNavigate } from 'react-router-dom';


export const Card = ({
  imgSrc,
  imgAlt,
  title,
  website,
  country,
  buttonText,
  link,
}) => {

  const navigate = useNavigate();

  const handleItemClick = () => {

    // Navigate to the UniversityDetailsPage and pass the 'item' object
    navigate(`/university/:${title}`, { state: { name1:title, web:website, country:country,img:imgSrc } });
  };

  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      {title && <h1 className="card-title">{title}</h1>}
      {website && <p className="card-description">{website }</p>}
      {country && <p className="card-description">{country }</p>}
     
      <button  className="card-btn" onClick={() => handleItemClick()}>Click for more Details</button>
    </div>
  );
};
