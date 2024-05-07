import { useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom";
import "./University.css"


function University(){
    const {name} = useParams();

    const location = useLocation();
    const { country, name1, web, img } = location.state || {}; // Access the item object from state
//console.log(img)
    return(
        <div className="container">
        <h1>University Page</h1> <br/>
        <h2>{name}</h2> <br/>
        <h3>{country}</h3>
        <h3>{web}</h3>
        <img src={img}></img>


        </div>
    )
}
export default University