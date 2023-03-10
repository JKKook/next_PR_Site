import React from 'react';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import Stacks from '../../pages/Stacks';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Stacks />
      <Footer />
    </>
  );
}
