// OrderBy.js
import  { useState, useEffect } from 'react';
import './OrderBy.css'; 
import { Card } from './Card';

const OrderBy = ({ items }) => {
  const [sortedItems, setSortedItems] = useState([...items]);

  const handleSort = () => {
    const sorted = [...sortedItems].sort((a, b) => a.name.localeCompare(b.name));
    setSortedItems(sorted);
    
  };

  useEffect(() => {
setSortedItems(items);
  },[items]);

  return (
    <>
    {/* 
    <div className="order-by-container">
      <button onClick={handleSort}>Sort Alphabetically</button>
      <ul className="item-list">
        {sortedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    */}
    <div className="order-by-container">
      <button onClick={handleSort}>Sort Alphabetically</button>
      </div>

<ul>
<div className="card-container3" >
{sortedItems && sortedItems.map( (item,index) => (
  
  <li key={index} > 
  
  <div className="card3">
        <Card 
            imgSrc="https://picsum.photos/id/193/300/200"
            imgAlt="Card Image 3"
            title={item.name}
            description=   "This is the real card description section. You can add more details about the product here"
            buttonText="Details"
            link="card2"
          />
          </div>
          </li>
          
          ))}
          </div>
</ul>
</>
  );
};

export default OrderBy;
