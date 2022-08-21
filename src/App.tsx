import './App.css';

import {Chat} from './components/Chat';
import {Route, Routes} from 'react-router-dom';
import {ChatOutlet} from './components/ChatOutlet';
import {initChatsData, initContactsData} from './data/data';
import {useEffect} from 'react';
import {fetchChatContacts, fetchChats,} from './store/action-creators/chatActionCreator';
import {useAppDispatch} from './store/hooks';

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!localStorage.getItem("contacts") || !localStorage.getItem("chats")) {
      localStorage.setItem("contacts", initContactsData);
      localStorage.setItem("chats", initChatsData);
    }
    dispatch(fetchChatContacts());
    dispatch(fetchChats());
  }, []);

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<ChatOutlet />}>
          <Route path="/:chatId" element={<Chat />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
