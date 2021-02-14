import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nikita Makhov</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto flex flex-col justify-center items-center h-screen">
        <header className="flex flex-col items-center mt-auto">
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

        <footer className="flex flex-col items-center justify-center mt-auto">
          <p className="font-heading text-2xl">Can't touch this</p>

          <div className="flex flex-row justify-center mt-4 mb-8">
            <img src="./social/facebook.svg" width="24" className="mx-4" />
            <img src="./social/github.svg" width="24" className="mx-4" />
            <img src="./social/instagram.svg" width="24" className="mx-4" />
            <img src="./social/twitter.svg" width="24" className="mx-4" />
            <img src="./social/lastfm.svg" width="24" className="mx-4" />
          </div>
        </footer>
      </div>
    </div>
  );
}

export const config = {
  unstable_runtimeJS: false,
};
