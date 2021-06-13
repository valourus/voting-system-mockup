import { createContext } from 'react';
import { User } from '../schema/User';

interface UserContext {
  user: User | null;
  setUserInContext: (user: User) => void;
}

export const UserContext = createContext<UserContext>({
  user: null,
  setUserInContext: () => undefined,
});
