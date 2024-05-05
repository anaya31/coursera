import './App.css'
import AddContact from './AddContact';
import ContactList from './ContactList';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
function App(){
   const [contact,setContact]=useState([]);
   //const [editItem,setEditItem]=useState(null);
   //const [toggleSubmit,setToggleSubmit]=useState(true);
   const addHandler=(co1)=>{
      console.log(co1);
      setContact([...contact,{id:uuidv4(),...co1}])
      
   }

   const deleteHandler=(id)=>{
     const prevContact=contact.filter((co)=> {return co.id!==id});
     setContact(prevContact);
     console.log(prevContact)
   }

   

      return <div>
      <h1>Contact Manager</h1>
      <AddContact addContact={addHandler} />
      <ContactList  contact={contact} onDelete={deleteHandler} />
    </div>
}

export default App;