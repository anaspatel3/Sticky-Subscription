
import { Link } from "react-router-dom";
import "./App.css";

// import Homepage from './Homepage';
const NavBar = (props) => {
    return(
        
        <header>
            <div className="container">
            
                <Link to="./Homepage">
                    <h1>Subscriptions</h1>
                    
                </Link>
                {/* <Link to="./contact" className="contact">
                    <h1>Contact</h1>  
                </Link>
                <Link to="./about" className="about">
                    <h1>About</h1>  
                </Link> */}
                </div>
                {/* <h1>{props.fname}</h1>   */}
        </header>
            
            
    )
}     
export default NavBar;