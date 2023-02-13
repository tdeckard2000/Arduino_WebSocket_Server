import Head from "next/head";
import styles from '@/styles/Home.module.css'

export default function About() {
  return (
    <>
      <main className={styles.main}>
        <Head>
            <title>My Test</title>
        </Head>
        <p>Hello Earth</p>
      </main>
    </>
  );
}
