//import ContactCard from "./ContactCard";
import './ContactCard.css';
const ContactList=(props)=>{
    console.log(props);
    
    return (
        <div>
            
            <ul>
                {
                    
                    props.contact.map(co2=>(
                      <div className='Card'>
                        <li
                         key={co2.id}> <h2>{co2.name}</h2> <h2>{co2.email}</h2><h2>{co2.mobileno}</h2><button onClick={()=>props.onDelete(co2.id)}>
                         Delete   </button></li>
                         </div>
                         ))
                    
                     
                }
                
            </ul>
        </div>
    )
} 
    


export default ContactList