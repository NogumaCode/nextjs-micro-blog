import Head from 'next/head';
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from 'next/link';

const name ="Python Developer Blog";
export const siteTitle = "Python Developer Blog";

function Layout({children, home}) {
  return (
    <div className={styles.container}>
     <Head>
      <link rel="icon" href="/favicon.ico" />
     </Head>
     <header className={styles.header}>
      {home ? (
        <>
         <img src="/images/profile.jpg"  className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`} />
      <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>

      ):(
        <>
         <img src="/images/profile.jpg"  className={`${utilStyles.borderCircle}`} />
      <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>

      )}

     </header>
     <main>{children}</main>
     {! home && (
      <div>
        <Link href="/"><a href="">ホームへ戻る</a></Link>
      </div>
     )}
    </div>
  );
}

export default Layout;
