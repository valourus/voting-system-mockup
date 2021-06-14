import { NavBar } from '../components/navbar';
import styled from 'styled-components';
import { Banner } from '../components/Banner';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { UserContext } from '../context/UserContext';
import { useState } from 'react';
import { User } from '../schema/User';

const PageContainer = styled.main`
  margin-top: 40px;
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#01689b',
    },
    secondary: {
      main: '#ff7f38',
      contrastText: 'white'
    }
  },
});

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState<User>(null);

  return (
    <UserContext.Provider value={{ user: user, setUserInContext: setUser }}>
      <MuiThemeProvider theme={theme}>
        <div>
          <Banner />
          <NavBar />
          <PageContainer>
            <Component {...pageProps} />
          </PageContainer>
        </div>
      </MuiThemeProvider>
    </UserContext.Provider>
  );
}

export default MyApp;
