import { Container } from '../components/Container';
import { Typography } from '@material-ui/core';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useVotes } from '../hooks/useVotes';
import { parties } from './vote';

const StyledA = styled.a`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`;

export const Confirmed = () => {
  const { user, setUserInContext } = useContext(UserContext);
  const { push } = useRouter();
  const { votes } = useVotes();
  const party = parties.find((p) => p.name === votes[user?.username]);

  return (
    <Container>
      <Typography variant={'h2'} component={'h1'}>
        U Heeft gestemd
      </Typography>
      <Typography variant={'h5'} component={'p'}>
        U heeft gestemd op: {party.leader} van de partij {party.name}
      </Typography>
      <Typography variant={'h5'} component={'p'}>
        <StyledA
          onClick={() => {
            push('/').then(() => setUserInContext(undefined));
          }}
        >
          Klik hier om terug te gaan
        </StyledA>
      </Typography>
    </Container>
  );
};

export default Confirmed;
