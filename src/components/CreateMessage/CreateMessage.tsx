import React, {useState} from 'react';
import sendIcon from '../../static/send.svg';
import {useAppDispatch} from '../../store/hooks';
import {useParams} from 'react-router-dom';
import {createMessage, fetchAnswer,} from '../../store/action-creators/chatActionCreator';
import {v4 as uuid} from 'uuid';
import './createMessage.scss';

export const CreateMessage = () => {
  const { chatId } = useParams();
  const dispatch = useAppDispatch();

  const [messageText, setMessageText] = useState("");

  const onSendMessage = () => {
    if (messageText) {
      const message = {
        id: uuid(),
        own: true,
        text: messageText,
        date: `${new Date()}`,
      };
      dispatch(createMessage({ message, chatId: Number(chatId) }));
      setTimeout(() => dispatch(fetchAnswer(Number(chatId))), 10000);
    }
    setMessageText("");
  };

  const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && messageText) {
      const message = {
        id: uuid(),
        own: true,
        text: messageText,
        date: `${new Date()}`,
      };
      dispatch(createMessage({ message, chatId: Number(chatId) }));
      setTimeout(() => dispatch(fetchAnswer(Number(chatId))), 10000);
      setMessageText("");
    }
  };

  return (
    <div className="create-message">
      <input
        type="text"
        placeholder="Type your message"
        className="create-message__input"
        onChange={(e) => {
          setMessageText(e.target.value);
        }}
        value={messageText}
        onKeyPress={onEnterPress}
      />
      <img
        onClick={onSendMessage}
        className="create-message__icon"
        src={sendIcon}
        alt="#"
      />
    </div>
  );
};
