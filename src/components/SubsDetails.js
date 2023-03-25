const SubsDetails = ({ sub }) => {
    return (
        
        <div className="subs-details">
                
            <p><strong>Name </strong>{sub.name}</p>
            <p><strong>Type </strong>{sub.type}</p>
            <p><strong>Genre </strong>{sub.genre}</p>
            
            <p><strong>Amount </strong>{sub.amount}</p>
            <p><strong>Date </strong>{sub.dat}</p>

        </div>
    )
}

export default SubsDetails