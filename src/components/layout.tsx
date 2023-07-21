import Head from "next/head";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
      <>
        <Head>
            <meta property="og:title" content="Interview Buddy" key="title" />
            <meta name="description" content="Welcome to Interview Buddy! The app created to pair you with industry professionals through practice interviews, to help you nail your upcoming interviews and land you next gig!" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Header/>
        <main>{children}</main>
      </>
    );
};

export default Layout;