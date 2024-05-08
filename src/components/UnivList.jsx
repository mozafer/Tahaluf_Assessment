import { Card } from "./Card";
import './UnivList.css';
import { useState, useEffect } from "react";
import axios from "axios";


function UnivList() {

  const [university, setUniversity] = useState(null);
  const [searchQuery2, setSearchQuery2] = useState('');
  const [sortBy, setSortBy] = useState('country');
 
  let counter = 0 ;

  // Handle search input
  const handleSearch2 = (event) => {
    setSearchQuery2(event.target.value);
  };
  // Handle sorting selection
  const handleSort2 = () => {
    setSortBy('name');
  };
  //Filtered&Sorted
  const univ = JSON.parse(localStorage.getItem('univ'))   ;
  console.log( counter++  + "univ: " + univ); 
  console.log( counter++  + "university: " + university); 

  const filteredAndSortedItems = univ? univ : []
    .filter((item) =>
      item.name.toLowerCase().includes(searchQuery2.toLowerCase())
    )
    .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));


    const getData = async () => {
      
      try{
if(!univ  ) {
      const response = await axios.get('http://universities.hipolabs.com/search?country=United%20Arab%20Emirates');
      setUniversity(response.data) ;
      const apiData = response.data;
      localStorage.setItem('univ', JSON.stringify(apiData)  );
      console.log( counter++ + "inside the getData !!!") ;
    }
    
    } catch (error) {
    console.error('Error fetching data:', error);
  }
      }
  
useEffect( () => {
  console.log( counter++ + "inside the effect !!!") ;
    getData();
  
},[]);


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
            website= {item.web_pages}
            country= {item.country}
            buttonText="Details"
            link= {`/university/:${item.name}`}
            
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