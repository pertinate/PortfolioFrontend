import { AppProps } from 'next/app';
import AppContext from '../components/Contexts/AppContext';
import Header from '../components/Header';
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
    return (
        <AppContext>
            <div
                className='h-screen flex flex-col'
            >
                <Header />
                <Component {...pageProps} />
            </div>
        </AppContext>
    );
}

export default App;
