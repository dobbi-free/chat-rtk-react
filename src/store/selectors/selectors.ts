import {Chat, Contact} from '../types';
import {AppState} from '../typedef';
import {createSelector, Selector} from '@reduxjs/toolkit';

export const selectContacts: Selector<AppState, Contact[]> = (state) =>
  state.chat.contacts;

export const selectChats: Selector<AppState, Chat[]> = (state) =>
  state.chat.chats;

export const selectSearchChat: Selector<AppState, string> = (state) =>
  state.chat.searchChat;

export const selectLastMessage = createSelector(
  [selectChats, (state, id) => Number(id)],
  (chats: Chat[], id) => {
    const chat: Chat = chats.find((el: Chat) => el.id === id)!;
    return chat?.messages[chat?.messages?.length - 1];
  }
);

export const selectChatMessages = createSelector(
  [selectChats, (state, id) => Number(id)],
  (chats: Chat[], id) => {
    const chat: Chat = chats.find((el: Chat) => el.id === id)!;
    return chat?.messages;
  }
);

export const selectChatContact = createSelector(
  [selectContacts, (state, id) => Number(id)],
  (contacts: Contact[], id) => {
    const contact: Contact = contacts.find((el: Contact) => el.id === id)!;
    return contact?.name;
  }
);
