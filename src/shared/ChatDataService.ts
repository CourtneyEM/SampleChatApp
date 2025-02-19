import { atom, getDefaultStore, useAtom } from 'jotai';
import { mockChats } from 'Mocks/mockChats';

export class ChatDataService {
  private static _instance: ChatDataService = new ChatDataService();
  private atomStore = getDefaultStore();
  private chatsAtom;

  constructor() {
    if (ChatDataService._instance) {
      return ChatDataService._instance;
    }

    ChatDataService._instance = this;
    this.chatsAtom = atom([]);

    this.initialize();
  }

  private sortMessages(chat) {
    let chats = structuredClone(chat);

    chats = chats.map((x) => ({
      ...x,
      messages: x.messages
        .sort(
          (a, b) =>
            new Date(a.sentOnUtc).getTime() - new Date(b.sentOnUtc).getTime(),
        )
        .reverse(),
    }));

    return chats;
  }

  public Use() {
    useAtom(this.chatsAtom);

    return this;
  }

  public initialize() {
    // Normally would be retrieved from API, but for this example, using mock data
    const chats = this.sortMessages(mockChats);
    this.atomStore.set(this.chatsAtom, chats);
  }

  public get Messages(): Array<any> {
    return this.atomStore.get(this.chatsAtom);
  }

  public addMessage(id, userId, text) {
    const messages = this.Messages;
    const messagesIndex = messages.findIndex((x) => x.id == id);
    const chatMessages = messages[messagesIndex];

    const newMessage = {
      userId,
      text,
      sentOnUtc: new Date().toISOString(),
    };

    messages[messagesIndex].messages = [newMessage].concat(
      chatMessages.messages,
    );

    this.atomStore.set(this.chatsAtom, messages);
  }

  public getUserMessages(userId) {
    return this.Messages.filter((x) => x.participantIds.includes(userId));
  }

  public getChatMessages(chatId) {
    return this.Messages.find((x) => x.id == chatId);
  }
}
