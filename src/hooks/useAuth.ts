import { useLocalStorage } from 'react-use';
import { User } from '../schema/User';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const useAuth = (): (username: string, password: string) => boolean => {
  const { setUserInContext } = useContext(UserContext);
  const [userId, setUserId] = useLocalStorage<number>('user_id');
  const [users, setUsers] = useLocalStorage<User[]>('users', [], {
    raw: false,
    serializer: (u) => JSON.stringify(u),
    deserializer: (u) => JSON.parse(u),
  });

  const login = (username: string, password: string) => {
    let id = users.findIndex((u) => username === u.username);

    if (id === -1) {
      id = addUser({ username, password });
    }
    if(users[id].password === password) {
      setUserId(id)
      setUserInContext(users[id]);
      return true;
    }
    return false;
  };

  const addUser = (newUser: User) => {
    users.push(newUser);
    setUsers(users);
    return users.length - 1;
  };

  return login;
};
