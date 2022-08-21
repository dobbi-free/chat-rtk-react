import React from 'react';
import './chat.scss';
import './../../common-styles/common.scss';
import {ChatBar} from '../ChatBar';
import {ChatField} from '../ChatField';
import {CreateMessage} from '../CreateMessage';
import {Outlet} from 'react-router-dom';
import {useAppSelector} from '../../store/hooks';

export const Chat = () => {
  const loading = useAppSelector((state) => state.chat.loading);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="chat">
      <ChatBar />
      <ChatField />
      <CreateMessage />
      <Outlet />
    </div>
  );
};
