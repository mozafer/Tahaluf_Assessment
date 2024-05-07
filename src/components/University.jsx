import { useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom";

function University(){
    const location = useLocation();
    const { data } = location.state || {}; 


    return(
        <>
        <h1>University Page</h1>
        {data && <p>Data received: {data}</p>}
        </>
    )
}
export default University