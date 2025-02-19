import { atom, getDefaultStore, useAtom } from 'jotai';
import { mockUsers } from 'Mocks/mockUsers';

export class UserDataService {
  private static _instance: UserDataService = new UserDataService();
  private atomStore = getDefaultStore();
  private usersAtom;
  private lastChatIdAtom;

  constructor() {
    if (UserDataService._instance) {
      return UserDataService._instance;
    }

    UserDataService._instance = this;
    // Normally would be [], but for this example, using mock users
    this.usersAtom = atom(mockUsers);
    this.lastChatIdAtom = atom();
  }

  public Use() {
    useAtom(this.usersAtom);
    useAtom(this.lastChatIdAtom);

    return this;
  }

  public get Users(): Array<any> {
    return this.atomStore.get(this.usersAtom);
  }

  // Would normally have this as part of a different class. For speed and example purposes, putting it here.
  public get LastChatId(): number {
    return this.atomStore.get(this.lastChatIdAtom);
  }

  public set LastChatId(number) {
    this.atomStore.set(this.lastChatIdAtom, number);
  }

  // Would normally have this as part of a different class. For speed and example purposes, putting it here.
  public get CurrentUser() {
    const currentUserId = 1;
    return this.Users.find((x) => x.userId === currentUserId);
  }

  public getUser(userId) {
    return this.Users.find((x) => x.userId === userId);
  }

  public addUser(userId, name) {
    let users = this.Users;

    if (!users.find((x) => x.userId === userId)) {
      users = users.concat({ userId, name });
      this.atomStore.set(this.usersAtom, users);
    }
  }
}
