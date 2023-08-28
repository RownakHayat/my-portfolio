import Navbar from '@/components/HomePage/Navbar';
import '@/styles/globals.css'


function App({ Component, pageProps }:any){
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default App;