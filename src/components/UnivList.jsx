import { Card } from "./Card";
import './UnivList.css';
import { useState, useEffect } from "react";
import SearchTextbox from "./SearchTextbox";
import OrderBy from "./OrderBy";
import axios from "axios";

function UnivList() {
  const [university, setUniversity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortedItems, setSortedItems] = useState([...university]);

  const [searchQuery2, setSearchQuery2] = useState('');
  const [sortBy, setSortBy] = useState('country');

  const [selectedItem, setSelectedItem] = useState(null);

 
  // Handle search input
  const handleSearch2 = (event) => {
    setSearchQuery2(event.target.value);
  };
  // Handle sorting selection
  const handleSort2 = (event) => {
    setSortBy('name');
  };
  //Filtered&Sorted
  const filteredAndSortedItems = university
    .filter((item) =>
      item.name.toLowerCase().includes(searchQuery2.toLowerCase())
    )
    .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));


  localStorage.setItem("univ", JSON.stringify(university))

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

useEffect(() => {
  axios.get('http://universities.hipolabs.com/search?country=United%20Arab%20Emirates')
  .then(response => setUniversity(response.data))
  .catch(error => console.log(error)) ;
  setSortedItems(university);
},[university,sortedItems]);


    return(
      <>
      <div className="util-container" >
    <div>
   {/*  <SearchTextbox items={university} /> */}
   <div className="textbox-container">
      <input
        type="text"
        placeholder="Search..."
        className="custom-textbox"
        value={searchQuery2}
        onChange={handleSearch2}
      />
    </div>

    </div>
    <div >
      
    <div className="order-by-container">
      <button onClick={handleSort2}>Sort Alphabetically</button>
      </div>

    </div>
    </div>
<ul>
<div className="card-container2" >

{filteredAndSortedItems && filteredAndSortedItems.map( (item,index) => (
  <li key={index} > 
  
  <div className="card2">
        <Card 
            imgSrc="https://picsum.photos/id/193/300/200"
            imgAlt="Card Image 3"
            title={item.name}
            description=   "This is the real card description section. You can add more details about the product here"
            buttonText="Details"
            link= {`/university/:${item.name}`}
            onClick={() => handleItemClick(item)}
            
          />
          </div>
          </li>
          
          ))}

          </div>
</ul>
</>
)
}
export default UnivList