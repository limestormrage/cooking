import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import styles from './layout.module.scss';

export default function Layout(): JSX.Element {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
