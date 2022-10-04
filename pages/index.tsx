import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ZaqBit</title>
        <meta name="description" content="ZaqBit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to ZaqBit!</h1>

        <div className={styles.grid}>
          <Card
            link="https://nextjs.org/docs"
            title="Posts"
            description="Find in-depth information about Next.js features and API."
          />

          <Card
            link="https://nextjs.org/learn"
            title="Tags"
            description="Learn about Next.js in an interactive course with quizzes!"
          />

          <Card
            link="https://github.com/vercel/next.js/tree/canary/examples"
            title="Games"
            description="Discover and deploy boilerplate example Next.js projects."
          />

          <Card
            link="https://github.com/vercel/next.js/tree/canary/examples"
            title="Links"
            description="Instantly deploy your Next.js site to a public URL with Vercel."
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
