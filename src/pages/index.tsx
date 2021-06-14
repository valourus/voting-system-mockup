import * as React from 'react';
import { Button, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Container } from '../components/Container';

const BtnText = styled.span`
  padding: 0.4rem 0 0 1rem;
`;

export default function Home() {
  const { push } = useRouter();

  return (
    <Container>
      <Typography variant={'h3'}>Online stem systeem</Typography>
      <Typography variant={'subtitle1'}>Om u stem uit te kunnen brengen moet u eerst inloggen met digid</Typography>
      <Button variant={'contained'} onClick={() => push('/login')}>
        <img src={'/digid.svg'} width="45px" />
        <BtnText>Login met Digid</BtnText>
      </Button>
    </Container>
  );
}
