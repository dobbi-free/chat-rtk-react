import {createSlice} from '@reduxjs/toolkit';
import {
    createMessage,
    fetchAnswer,
    fetchChatContacts,
    fetchChats,
    searchChat,
} from '../action-creators/chatActionCreator';
import {Chat, Contact} from '../types';

type State = {
  contacts: Contact[];
  chats: Chat[];
  searchChat: string;
  loading: boolean;
};

const initialState = {
  contacts: [],
  chats: [],
  searchChat: "",
  loading: true,
} as State;

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchChat, (state, action) => {
      state.searchChat = action.payload;
    });
    builder.addCase(fetchChatContacts, (state, action) => {
      state.contacts = action.payload;
    });
    builder.addCase(fetchChats, (state, action) => {
      state.chats = action.payload;
      state.loading = false;
    });
    builder.addCase(createMessage.fulfilled, (state, action) => {
      const { chatIndex, message } = action.payload;
      state.chats[chatIndex].messages.push(message);
    });
    builder.addCase(fetchAnswer.fulfilled, (state, action) => {
      const { chatIndex, message } = action.payload;
      state.chats[chatIndex].messages.push(message);
      state.contacts = [
        state.contacts[chatIndex],
        ...state.contacts.filter(
          (el) => el.id !== state.contacts[chatIndex].id
        ),
      ];
    });
  },
});

export default chatSlice.reducer;
