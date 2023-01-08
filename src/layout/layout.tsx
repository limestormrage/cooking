import React from 'react';
import { Outlet } from 'react-router-dom';
import cn from 'classnames';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import styles from './layout.module.scss';

export default function Layout(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <main className={cn(styles.main, 'container')}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
