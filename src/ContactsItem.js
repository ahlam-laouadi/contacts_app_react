import React from 'react';

 function ContactsItem({contact:{name,age},deleteContact}) {
  return (
    <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td><span onClick={()=>deleteContact(name)} style={{cursor:'pointer'}} className="badge bg-danger font-weight-bold p-2">&times;</span></td>
    </tr>
  )
}
export default ContactsItem;