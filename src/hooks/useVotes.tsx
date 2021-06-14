import { FC, useContext } from 'react';
import { useLocalStorage } from 'react-use';
import { Party } from '../schema/Party';
import { UserContext } from '../context/UserContext';

export const useVotes = () => {
  const { user } = useContext(UserContext);
  const [votes, setVotes] = useLocalStorage<Record<string, string>>(
    'votes',
    {},
    {
      raw: false,
      serializer: (u) => JSON.stringify(u),
      deserializer: (u) => JSON.parse(u),
    },
  );

  const vote = (party: Party) => {
    setVotes({ ...votes, [user.username]: party.name });
  };

  return { vote, votes };
};
