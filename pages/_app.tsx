import Navbar from '@/components/HomePage/Navbar';
import '@/styles/globals.css'
import { Inter } from 'next/font/google'

function App({ Component, pageProps }:any){
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default App;