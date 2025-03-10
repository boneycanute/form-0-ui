"use client";

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
      <header className={styles.header}>
        <ProgressBar width={percent} />
        {/* <Image src="/logo.png" alt="GrowthX logo" width={160} height={24} /> */}
      </header>
      <main className={classNames(styles.main, satoshiFont.className)}>
        <SharedStatesProvider>
          <MainContent />
        </SharedStatesProvider>
      </main>
    </>
  );
}
