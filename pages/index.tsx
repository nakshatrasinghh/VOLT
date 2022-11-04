import Head from "next/head";
import React from "react";
import PageInfiniteScroll from "../components/PageInfinite";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl text-violet-800 py-2">
          Infinite Scroll Pagination
        </h1>
        <PageInfiniteScroll />
      </main>
    </div>
  );
}
