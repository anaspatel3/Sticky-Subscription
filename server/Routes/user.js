const express = require('express')

const {
    getUser
} = require('../controllers/userControler')



const router = express.Router()
//Get all Subscriptions
router.get('/:id', getUser)

module.exports = router



// export default class Homepage extends Component {

     

//     constructor(props){
//         super(props)
        
//         this.state = {
//            userData:"",
           
//            subData:null,
//         };
//     }
    
//     componentDidMount(){
//         fetch("http://localhost:4000/homepage",{
//             method:"POST",
//             crossDomain: true,
//             headers:{
//                 "content-type":"application/json",
//                 Accept:"application/json",
//                 "Access-Control-Allow-Origin":""
//             },
//             body: JSON.stringify({
//                 token:window.localStorage.getItem("token"),
//             }),

//         })
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data)
//             this.setState({userData: data.data})
//             if(data.status === "ok"){
//                 fetch("http://localhost:4000/api/subscriptions/",{
//             method:"GET",
//             crossDomain: true,
//             headers:{
//                 "content-type":"application/json",
//                 Accept:"application/json",
//                 "Access-Control-Allow-Origin":""
//             },

//         })
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             this.setState({subData: data.data})
//             const subs = this.state.subData

//         });
                
//             }
            
//         });

//     }
//        // if(data.status === "ok"){
//             //     useEffect(() =>{
//             //         const fetchSub = async() =>{
//             //             const response = await fetch("http://localhost:4000/api/subscriptions")
//             //             const json = await response.json()

//             //             if(response.ok) {
//             //                 this.setState({ subscriptions: json.data });
//             //             }
//             //         }

//             //         fetchSub()
//             //     },[]);
//     render(){
//         return(
            
//             <div className="pages">
//                 <NavBar />
//                 <p>Hello</p>
//                 <div className="subs">
//                     <h1>{this.state.userData.firstName}</h1>

                    
//                      {subs.map((Data) =>(
//                         <p key={Data._id}>{Data.name}</p>
//                         //<p>{this.state.subData.name} </p>

//                     ))}
//                 </div>
                

//             </div>
//         );
//     };
// };