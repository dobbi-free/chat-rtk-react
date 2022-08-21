import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {Chat, Message} from '../types';

export const fetchChatContacts = createAction("fetchChatContacts", () => {
  return { payload: JSON.parse(<string>localStorage.getItem("contacts")) };
});

export const fetchChats = createAction("fetchChats", () => {
  return { payload: JSON.parse(<string>localStorage.getItem("chats")) };
});

export const searchChat = createAction("searchChat", (name: string) => {
  return { payload: name };
});

type createMessageParams = {
  message: Message;
  chatId: number;
};

export const createMessage = createAsyncThunk(
  "createMessage",
  ({ message, chatId }: createMessageParams) => {
    const chats = JSON.parse(<string>localStorage.getItem("chats"));
    const chatIndex = chats.findIndex((el: Chat) => el.id === chatId);
    chats[chatIndex].messages.push(message);

    localStorage.setItem("chats", JSON.stringify(chats));

    return { message, chatIndex };
  }
);

export const fetchAnswer = createAsyncThunk(
  "fetchAnswer",
  async (chatId: number) => {
    const response = await fetch(
      "https://api.chucknorris.io/jokes/random"
    ).then((res) => res.json());

    const message = {
      id: response.id,
      own: false,
      text: response.value,
      date: `${new Date()}`,
    };

    const chats = JSON.parse(<string>localStorage.getItem("chats"));
    const chatIndex = chats.findIndex((el: Chat) => el.id === chatId);
    chats[chatIndex].messages.push(message);

    localStorage.setItem("chats", JSON.stringify(chats));

    return { message, chatIndex };
  }
);
