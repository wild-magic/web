import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';
import wildmagicon from '../assets/images/wild-magicon.png';
import fullTexticon from '../assets/images/wildmagic-og.png';
import '../styles/app.less';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-105796271-5"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-105796271-5');`,
            }}
          />

          <title>WildMagic | Games, but like for 2019</title>
          <meta name="theme-color" content="#FCE5FF" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" href={wildmagicon} />
          <meta
            property="og:title"
            content="WildMagic | Games, but like for 2019"
          />
          <meta
            property="og:description"
            content="Crawl through a dungeon and explore the features of a wild-magic enabled game."
          />
          <meta property="og:image" content={fullTexticon} />
          <meta property="og:url" content="https://wildmagic.io" />
        </Head>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
