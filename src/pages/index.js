import Head from 'next/head';
import Image from 'next/image';
import { ThemeProvider } from 'styled-components';
import { loadPosts } from '../api/load-posts';
import { theme } from '../styles/theme';

import { GraphQLString } from 'graphql';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    loadPosts({
      authorSlug: 'otavio-miranda',
    }).then((r) => {
      console.log(r);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <h1>teste</h1>
    </ThemeProvider>
  );
}
