
import NavBar from './NavBar';
import "./style.css";
import { useEffect, useState } from "react";
import SubsDetails from './components/SubsDetails';
import SubsForm from './components/SubsForm';

const Homepage = () => {
    const [subscriptions, setSubscriptions] = useState(null)
 
    useEffect(() =>{

        const fetchSub = async() =>{
             
            const response = await fetch("http://localhost:4000/api/subscriptions")
            const json = await response.json()
        
            if(response.ok) {
                setSubscriptions(json)
                console.log(json)
                {subscriptions && subscriptions.map((sub) => (
                    console.log(sub.email)
                 ))}

            }
            }
        fetchSub()
        
    }, []);

    return (
        <div className="home">
                 <NavBar />
                 <p></p>
                 <div className="subs">
                 <h3>Your Subscriptions</h3>
                     {subscriptions && subscriptions.map((sub) => (
                        <SubsDetails key={sub._id} sub={sub} />
                     ))}
                    
                 </div>
                 <SubsForm />

        </div>
    )


}

export default Homepage;








