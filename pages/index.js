import Head from "next/head";
import Layout from "./layouts/layout";
import Main from "./main/main";


const HomePage = ()=> {
    return (
        <>
            <Head>
                <title>Next App</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
            </Head>
            <Layout>
                <Main />
            </Layout>
        </>
    )
}

export default HomePage;