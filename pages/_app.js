import '../styles/globals.css';
import { MoralisProvider } from 'react-moralis';
import { TinderProvider } from '../context/TinderContext';

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://oxarda1c4cbv.usemoralis.com:2053/server'
      appId='DDhglZDD9biY2O9Jst3A0NNj4TFjxFfTk89C0G80'
    >
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  );
}

export default MyApp;
