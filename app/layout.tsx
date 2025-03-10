import { QuestionsProvider } from "@/contexts";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Mascot } from "@/components/Mascot";

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
          <div className="form-container">
            <div className="form-content">
              <Mascot />
              {children}
            </div>
          </div>
        </QuestionsProvider>
      </body>
    </html>
  );
}
