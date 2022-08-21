export type Contact = {
  id: number;
  name: string;
};

export type Chat = {
  id: number;
  messages: Message[];
};

export type Message = {
  id: string;
  text: string;
  own: boolean;
  date: string;
};
