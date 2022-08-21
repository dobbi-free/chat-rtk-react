import React from 'react';
import avatar from '../../../static/woman.webp';

interface IProps {
  text: string;
  date: string;
}

export const MessageAnswer = ({ text, date }: IProps) => {
  return (
    <div className="message-answer">
      <img className="avatar-img" src={avatar} alt="#" />
      <div className="message-answer__message">
        <p className="message-answer__text">{text}</p>
        <p className="message-answer__date">
          {new Date(date).toLocaleString()}
        </p>
      </div>
    </div>
  );
};
