import React from 'react';
import './chatField.scss';
import {MessageAnswer, MessageOwn} from './MessageItems';
import {useAppSelector} from '../../store/hooks';
import {selectChatMessages} from '../../store/selectors/selectors';
import {useParams} from 'react-router-dom';

export const ChatField = () => {
  const { chatId } = useParams();
  const messages = useAppSelector((state) =>
    selectChatMessages(state, chatId!)
  );

  return (
    <div className="chat-field">
      {messages.map(({ id, text, date, own }) =>
        own ? (
          <MessageOwn key={id} text={text} date={date} />
        ) : (
          <MessageAnswer key={id} text={text} date={date} />
        )
      )}
    </div>
  );
};
