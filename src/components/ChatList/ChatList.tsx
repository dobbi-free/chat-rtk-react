import React from 'react';
import './chatList.scss';
import {ChatItem} from './ChatItem';
import {useAppSelector} from '../../store/hooks';
import {selectContacts, selectSearchChat,} from '../../store/selectors/selectors';

export const ChatList = () => {
  const contacts = useAppSelector(selectContacts);
  const searchChat = useAppSelector(selectSearchChat);

  return (
    <div className="chat-list">
      <h4 className="chat-list__title">Chats</h4>
      {contacts
        .filter((el) => el.name.toLowerCase().startsWith(searchChat))
        .map(({ id, name }) => (
          <ChatItem key={id} name={name} id={id} />
        ))}
    </div>
  );
};
