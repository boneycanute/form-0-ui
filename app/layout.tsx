import { QuestionsProvider } from "@/contexts";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Creation",
  description: "BTI Agent Creation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QuestionsProvider>
          {children}
        </QuestionsProvider>
      </body>
    </html>
  );
}
