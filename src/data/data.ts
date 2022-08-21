import {v4 as uuid} from 'uuid';

export const initContactsData = JSON.stringify([
  { id: 1, name: "Alice Freeman" },
  { id: 2, name: "Josefina" },
  { id: 3, name: "Velazquez" },
]);

export const initChatsData = JSON.stringify([
  {
    id: 1,
    messages: [
      {
        id: uuid(),
        text: "Hello, how you doing?",
        own: false,
        date: new Date(),
      },
      { id: uuid(), text: "Hi, i'm good", own: true, date: new Date() },
    ],
  },
  {
    id: 2,
    messages: [
      {
        id: uuid(),
        text: "Hello, how you doing?",
        own: false,
        date: new Date(),
      },
      { id: uuid(), text: "Hi, i'm bad", own: true, date: new Date() },
    ],
  },
  {
    id: 3,
    messages: [
      {
        id: uuid(),
        text: "Hello, how you doing?",
        own: false,
        date: new Date(),
      },
      { id: uuid(), text: "Hi, i'm ok", own: true, date: new Date() },
    ],
  },
]);
