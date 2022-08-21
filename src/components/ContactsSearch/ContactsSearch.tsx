import React, {useState} from 'react';
import searchIcon from '../../static/search-svgrepo-com.svg';
import './contactSearch.scss';
import {searchChat} from '../../store/action-creators/chatActionCreator';
import {useAppDispatch} from '../../store/hooks';

export const ContactsSearch = () => {
  const [searchName, setSearchName] = useState("");
  const dispatch = useAppDispatch();

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
    dispatch(searchChat(e.target.value));
  };

  return (
    <div className="search">
      <input
        placeholder="Search or start new chat"
        type="text"
        className="search__input"
        value={searchName}
        onChange={onSearchChange}
      />
      <img src={searchIcon} alt="#" className="search__icon" />
    </div>
  );
};
