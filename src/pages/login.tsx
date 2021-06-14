import {Button, Card, CardContent, TextField, Typography} from '@material-ui/core';
import * as React from 'react';
import {useState} from 'react';
import {Container} from '../components/Container';
import styled from 'styled-components';
import {User} from '../schema/User';
import {NEW_USER, OLD_USER, useAuth} from '../hooks/useAuth';
import Alert from '@material-ui/lab/Alert';
import {useRouter} from 'next/router';

const StyledContainer = styled(Container)`
  max-width: 500px;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-top: 1rem !important;
  }
`;

const emptyUser = { username: '', password: '' };

const Login = () => {
  const [{ username, password }, setLoginInfo] = useState<User>(emptyUser);
  const [isError, setIsError] = useState(false);
  const { login } = useAuth();
  const { push } = useRouter();

  return (
    <StyledContainer>
      <Card>
        <CardContent>
          <Typography variant={'h4'} component={'h1'}>
            Login met Digid
          </Typography>
          <FieldContainer>
            {isError && (
              <Alert variant="outlined" severity="error">
                Verkeerde gebruikersnaam of wachtwoord
              </Alert>
            )}
            <TextField
              variant={'filled'}
              label={'Gebruikersnaam'}
              value={username}
              onChange={(e) => setLoginInfo({ username: e.target.value, password })}
            />
            <TextField
              variant={'filled'}
              label={'Wachtwoord'}
              type={'password'}
              value={password}
              onChange={(e) => setLoginInfo({ username, password: e.target.value })}
            />
            <Button
              color={'primary'}
              variant={'contained'}
              type={'submit'}
              onClick={() => {
                const response = login(username, password);
                if (response === NEW_USER) push('/vote');
                else if (response === OLD_USER) push('/confirmed');
                else setIsError(true);
              }}
            >
              Login
            </Button>
          </FieldContainer>
        </CardContent>
      </Card>
    </StyledContainer>
  );
};

export default Login;
