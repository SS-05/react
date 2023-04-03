import React from 'react';
import {Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = ({ contacts, handleDelete, setIsEditMode, isEditMode, handleEdit, handleFav }) => {
  return (
      <div className="ui celled list">
        <h3>Contact List</h3>
        {
          contacts.map((indContact, index) => {
            return (
              <ContactCard handleFav={handleFav} handleEdit={handleEdit} key={indContact.id} contactList={indContact} index={index} handleDelete={handleDelete} setIsEditMode={setIsEditMode}
                isEditMode={isEditMode} />
            )
          })
        }
        <Link to="/add">
          <button className='ui button blue'>Add Contact</button>
        </Link>
      </div>
  )
}

export default ContactList





