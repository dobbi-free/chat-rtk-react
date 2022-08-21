import React from 'react';

interface IProps {
  text: string;
  date: string;
}

export const MessageOwn = ({ text, date }: IProps) => {
  return (
    <div className="message-own">
      <div className="message-own__message">
        <p className="message-own__text">{text}</p>
      </div>
      <p className="message-own__date">{new Date(date).toLocaleString()}</p>
    </div>
  );
};
