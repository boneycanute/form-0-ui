"use client";

import { ProgressBar, Mascot, MainContent } from "@/components";
import { SharedStatesProvider, useQuestions } from "@/contexts";
import { satoshiFont } from "@/utils";
import classNames from "classnames";

export default function Home() {
  const { percent } = useQuestions();

  return (
    <>
      <header>
        <ProgressBar width={percent} />
      </header>
      <div className={classNames("form-container", satoshiFont.className)}>
        <div className="form-content">
          <Mascot />
          <SharedStatesProvider>
            <MainContent />
          </SharedStatesProvider>
        </div>
      </div>
    </>
  );
}
