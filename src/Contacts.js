import React from 'react';
import ContactsItem from './ContactsItem';
import AddContacts from './AddContacts';
class Contacts extends React.Component {
    constructor(props){
        super(props);
        this.state={
            contacts:[
                {
                    name:"name1",
                    age:"20",
                },
                {
                    name:"name2",
                    age:"21",
                },
                {
                    name:"name3",
                    age:"22",
                }
            ]

        }
    }
    addContact=(contact)=>{
        let updatedContacts=this.state.contacts;
        updatedContacts.push(contact);
        this.setState({contacts:updatedContacts}); 
        }
        deleteContact=(name)=>{
            let oldContacts=this.state.contacts;
           let updatedContacts=oldContacts.filter(contact=>contact.name!==name);
            this.setState({contacts:updatedContacts}); 
            }
  render(){
    return (
        <div className='container'>
            <AddContacts addContact={this.addContact}/>
           <div className="raw my-5">
            <div className="col-md-6 mx-auto">
              <div className="card">
                <table className="table">
                  <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.contacts.map((contact,index)=>
                     <ContactsItem  deleteContact={this.deleteContact} key={index} contact={contact}/>)}
                </tbody>
                </table>
                </div>
            </div>
           </div>
        </div>
      )
    }
}
export default Contacts;