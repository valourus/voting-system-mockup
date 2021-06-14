import { useLocalStorage } from 'react-use';
import { User } from '../schema/User';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const NEW_USER = 'new_user';
export const ERROR = 'error';
export const OLD_USER = 'old_user';

export type LoginResponse = typeof NEW_USER | typeof ERROR | typeof OLD_USER;

export const useAuth = (): {
  login: (username: string, password: string) => LoginResponse;
} => {
  const { setUserInContext } = useContext(UserContext);
  const setUserId = useLocalStorage<number>('user_id')[1];
  const [users, setUsers] = useLocalStorage<User[]>('users', [], {
    raw: false,
    serializer: (u) => JSON.stringify(u),
    deserializer: (u) => JSON.parse(u),
  });

  const login = (username: string, password: string): LoginResponse => {
    let id = users.findIndex((u) => username === u.username);

    if (id === -1) {
      setUserId(addUser({ username, password }));
      setUserInContext({ username, password });
      return NEW_USER;
    }
    if (users[id].password === password) {
      setUserId(id);
      setUserInContext(users[id]);
      return OLD_USER;
    }
    return ERROR;
  };

  const addUser = (newUser: User) => {
    users.push(newUser);
    setUsers(users);
    return users.length - 1;
  };

  return {
    login,
  };
};
