import Head from 'next/head';
import Header from '../app/components/header/header';
import Footer from '../app/components/Footer/Footer';

export default function Home() {
    return (
        <>
            <Head>
                <title>My Next.js Homepage</title>
                <meta name="description" content="Welcome to my Next.js homepage." />
            </Head>
            <Header />
           <h1><center>Welcome to Mojza Innovation</center></h1>
           <h2><u>Unleash Your Style with Unique T-Shirts</u></h2>
           <div>Discover a vibrant collection of trendy and comfortable T-shirts designed to express your individuality.</div>
             Elevate your wardrobe with our exclusive designs that make a statement.
            <Footer />
        </>
    );
}
