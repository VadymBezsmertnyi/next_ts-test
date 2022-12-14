import Head from 'next/head';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { Header, Main, Footer } from 'components';
import { createAppTheme } from '../src/theme';

export default function Home() {
  const theme = createAppTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box>
          <Head>
            <title>TESTING NEXT.JS/TS</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/faviconCompany.png" />
          </Head>
          <Header />
          <Main />

          <Footer />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}
