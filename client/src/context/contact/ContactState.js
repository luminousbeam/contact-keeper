import React, { useReducer } from 'react';
import {v4 as uuidv4} from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@email.com',
        phone: '111-111-1111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Mike Johnson',
        email: 'mike@email.com',
        phone: '112-112-1111',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Mary Johnson',
        email: 'mary@email.com',
        phone: '222-111-1111',
        type: 'professional',
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add contact
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };

  //Delete contact
  //Set current contact
  //Clear current contact
  //Update contact
  //Filter contacts
  //Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
