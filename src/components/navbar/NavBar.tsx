import * as React from 'react';
import { FC, useContext } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { UserContext } from '../../context/UserContext';

const StyledTypography = styled(Typography)`
  flex-grow: 1;
`;

export const NavBar: FC = (): JSX.Element => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <AppBar position="static">
      <Toolbar>
        <StyledTypography variant="h6">online stem systeem</StyledTypography>
        {user && <Typography>{user.username}</Typography>}
      </Toolbar>
    </AppBar>
  );
};
