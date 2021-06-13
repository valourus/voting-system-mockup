import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core';
import * as React from 'react';
import { Container } from '../components/Container';
import styled from 'styled-components';
import { useState } from 'react';
import { User } from '../schema/User';
import { useAuth } from '../hooks/useAuth';
import Alert from '@material-ui/lab/Alert';

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
  const login = useAuth();

  return (
    <StyledContainer>
      <Card>
        <CardContent>
          <Typography variant={'h4'} component={'h1'}>
            Login met Digid
          </Typography>
          <FieldContainer>
            {isError && <Alert variant="outlined" severity="error">Verkeerde gebruikersnaam of wachtwoord</Alert>}
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
              onClick={() => setIsError(login(username, password))}
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
