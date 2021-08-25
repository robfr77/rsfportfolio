import React from 'react';
import Head from 'next/head';
import AppNavbar from './app-navbar';
import styles from '../styles/layout.module.scss';

export const siteTitle = 'Web Application Developer';

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <AppNavbar />
      <div className={styles.container}>
        <Head>
          <title>{siteTitle}</title>
          <meta name="description" content="I'm a web application developer." />
          <link rel="icon" href="/favicon.ico" />
          <meta name="og:title" content={siteTitle} />
        </Head>
        {children}
      </div>
    </div>
  );
}
