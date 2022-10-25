import Head from 'next/head';
import Image from 'next/image';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <h1>teste</h1>
    </ThemeProvider>
  );
}
