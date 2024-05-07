
import './SearchTextbox.css'; 
import {  useState } from 'react';
import { Card } from './Card';

const SearchTextbox = ({items}) => {

  const [searchQuery, setSearchQuery] = useState('');
  

  // handle search input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    console.log( "Search Query: "+searchQuery);
  };

  // Filter universities based on search query
  console.log(items);
  const  filteredCards = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <>
    <div className="textbox-container">
      <input
        type="text"
        placeholder="Search..."
        className="custom-textbox"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>

    <ul>

<div className="card-container4" >
{filteredCards && filteredCards.map( (item,index) => (
  
  <li key={index} > 
  
  <div className="card4">
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

export default SearchTextbox;
