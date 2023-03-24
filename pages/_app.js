import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import {SessionProvider} from 'next-auth/react';
import SideMenu from '@/components/SideMenu';

export default function App({ session, Component, pageProps }) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  )
}