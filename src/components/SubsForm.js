import { useState } from "react"
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

const SubsForm = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [genre, setGenre] = useState('')
    const [amount, setAmount] = useState('')
    const [dat, setDdate] =useState('')
    const [error, setError] = useState(null)

    
    const handleSubmit = async(e) => {
        e.preventDefault()

        const sub = {name, type, genre, amount, dat}
        console.log(name, type, genre, amount, dat)
        const response = await fetch('http://localhost:4000/api/subscriptions', {
            method: 'POST',
            body: JSON.stringify(sub),
            headers : {
                'Content-Type' : 'application/json',
                Accept:"application/json",
                "Access-Control-Allow-Origin":""
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
            setName('')
            setType('')
            setGenre('')
            setAmount('')
            setDdate('')
            setError(null)
            console.log('New Sub Added', json)
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add New Sub</h3>

            <label>Name:</label>
            <input 
                type="text"
                onChange={(e) => setName(e.target.value)} 
                value={name}
            />

            <label>Type:</label>
            <input 
                type="text"
                onChange={(e) => setType(e.target.value)} 
                value={type}
            />

            <label>Genre:</label>
            <input 
                type="text"
                onChange={(e) => setGenre(e.target.value)} 
                value={genre}
            />
            <label>Amount:</label>
            <input 
                type="number"
                onChange={(e) => setAmount(e.target.value)} 
                value={amount}
            />
            <label>Date:</label>
            <input 
                type="date"
                onChange={(e) => setDdate(e.target.value)} 
                value={dat}
                
            />
            {/* <ReactDatePicker selected={date}
            onChange={(date) => setDate(date)}
            dateFormat='yyyy-mm-dd'/> */}
            {/* <ReactDatePicker selected={date} 
            onChange={(e) => setDate(e.target.value)} 
            value={date} 
            minDate={new Date()}
            dateFormat='yyyy-mm-dd'/>  */}

            <button>Add Subscription</button>
            {error && <div className="error">{error}</div>}
        </form>    
    )
}

export default SubsForm;