import  { useState } from 'react';
import './OrderBy.css'; 

const OrderBy = ({ getOrderBy }) => {
  const [sortBy, setSortBy] = useState();

  const handleSort = () => {
    setSortBy("name");
    getOrderBy("name") ;
    
  };

  return (
    <>
    <div className="order-by-container">
      <button onClick={handleSort}>Sort Alphabetically</button>
      </div>
</>
  );
};

export default OrderBy;
