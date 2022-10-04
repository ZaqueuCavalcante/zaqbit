import type { NextPage } from "next";
import Head from "next/head";
import P5 from "p5";

const Games: NextPage = () => {
  return (
    <>
      <Head>
        <title>ZaqBit</title>
        <meta name="description" content="ZaqBit" />
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <h1>Games here</h1>
      <script src="./game.js"></script>
    </>
  );
};

export default Games;
