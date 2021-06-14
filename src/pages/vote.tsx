import React, { FC } from 'react';
import { Container } from '../components/Container';
import { Typography } from '@material-ui/core';

export const Vote: FC = (): JSX.Element => {
  return (
    <Container>
      <Typography>Op wie wil je stemmen?</Typography>
    </Container>
  );
};

export default Vote;
