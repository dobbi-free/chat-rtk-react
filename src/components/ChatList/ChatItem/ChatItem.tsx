import React from 'react';
import avatar from '../../../static/Avatar.png';
import './chatItem.scss';
import {useAppSelector} from '../../../store/hooks';
import {selectLastMessage} from '../../../store/selectors/selectors';
import {useNavigate} from 'react-router-dom';

interface Props {
  id: number;
  name: string;
}

export const ChatItem = ({ name, id }: Props) => {
  const navigate = useNavigate();
  const message = useAppSelector((state) => selectLastMessage(state, id));

  const formattedDate = new Date(message.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="chat-item" onClick={() => navigate(`${id}`)}>
      <img src={avatar} alt="#" className="chat-item__img" />
      <div className="chat-item__info">
        <p className="chat-item__name">{name}</p>
        <p className="chat-item__message">
          {(message || {}).text.slice(0, 22)}...
        </p>
      </div>
      <p className="chat-item__date">{formattedDate}</p>
    </div>
  );
};
