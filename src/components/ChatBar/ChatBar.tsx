import React from 'react';
import avatar from '../../static/woman.webp';
import './chatBar.scss';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../store/hooks';
import {selectChatContact} from '../../store/selectors/selectors';

export const ChatBar = () => {
  const { chatId } = useParams();
  const name = useAppSelector((state) => selectChatContact(state, chatId!));

  return (
    <div className="chat-bar">
      <div className="chat-bar__profile">
        <img src={avatar} alt="#" className="avatar-img" />
        <p className="chat-bar__name">{name}</p>
      </div>
    </div>
  );
};
