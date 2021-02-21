import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nikita Makhov</title>
        <meta name="description" content="Nikita Makhov, front-end developer from Russia, Moscow"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto flex flex-col flex-wrap justify-center items-center h-screen">
        <header className="mt-auto">
          <h1 className={`font-heading font-bold text-6xl ${styles.logo}`}>
            <div className={styles.logoInner}>
              <div className={styles.up}>
                Nikita Makhov<span className="text-logo-pink-dot">.</span>
              </div>
              <div className={styles.down}>
                Defite<span className="text-logo-pink-dot">.</span>
              </div>
            </div>
          </h1>
          <p className="font-body text-gray-500 mt-2 text-xl">
            Front-end developer in Mail.ru from Russia, Moscow
          </p>
        </header>

        {/* <main></main> */}

        <footer className="mt-auto">
          <p className="font-heading text-2xl text-center">Can't touch this</p>

          <div className="flex flex-row justify-center mt-4 mb-8">
            <img src="./social/facebook.svg" alt="Facebook icon" width="24" height="24" className="mx-4 h-6" />
            <img src="./social/github.svg" alt="Github icon" width="24" height="24" className="mx-4 h-6" />
            <img src="./social/instagram.svg" alt="Instagram icon" width="24" height="24" className="mx-4 h-6" />
            <img src="./social/twitter.svg" alt="Twitter icon" width="24" height="24" className="mx-4 h-6" />
            <img src="./social/lastfm.svg" alt="LastFm icon" width="24" height="24" className="mx-4 h-6" />
          </div>
        </footer>
      </div>
    </div>
  );
}

export const config = {
  unstable_runtimeJS: false,
};
