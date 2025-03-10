import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { satoshiFont } from "@/utils";
import { MainContent, ProgressBar } from "@/components";
import classNames from "classnames";
import { SharedStatesProvider, useQuestions } from "@/contexts";

export default function Home() {
  const { percent } = useQuestions();

  return (
    <>
      <Head>
        <title>Agent Creation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="BTI Agent Creation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <ProgressBar width={percent} />
        <Image src="/logo.png" alt="GrowthX logo" width={160} height={24} />
      </header>
      <main className={classNames(styles.main, satoshiFont.className)}>
        <SharedStatesProvider>
          <MainContent />
        </SharedStatesProvider>
      </main>
    </>
  );
}
