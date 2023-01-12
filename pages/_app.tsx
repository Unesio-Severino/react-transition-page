import { AppProps } from 'next/app';
import "../styles/globals.css";

import Navbar from "../Components/Navbar";
import { AnimatePresence } from "framer-motion";
import router from 'next/router';


function MyApp({ Component, pageProps }: AppProps) {
 return (
    <div className="font-latoBold relative h-screen overflow-hidden py-20 px-12 lg:px-25">
      <Navbar />
      <AnimatePresence initial={false}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
 
  
}

export default MyApp;
