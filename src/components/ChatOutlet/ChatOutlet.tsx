import React from 'react';
import {Outlet} from 'react-router-dom';
import {Contacts} from '../Contacts';

export const ChatOutlet = () => {
  return (
    <>
      <Contacts />
      <Outlet />
    </>
  );
};
