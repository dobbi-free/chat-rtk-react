import React from 'react';
import './contacts.scss';
import avatar from '../../static/Avatar.png';
import {ContactsSearch} from '../ContactsSearch';
import {ChatList} from '../ChatList';

export const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__wrapper">
        <div className="contacts__profile">
          <img src={avatar} alt="#" className="contacts__profile-img" />
        </div>
        <ContactsSearch />
      </div>
      <ChatList />
    </div>
  );
};
