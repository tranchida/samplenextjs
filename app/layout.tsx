import { Metadata } from "next";
import ClientLayout from "./client-layout";
import "./globals.css";

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang="fr">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "NEXT.js Sample",
  description: "Un exemple d'application Next.js avec thème sombre/clair",
  keywords: ["Next.js", "React", "JavaScript", "TypeScript"],
  authors: [{ name: "Giampaolo Tranchida" }],
  openGraph: {
    title: "NEXT.js Sample",
    description: "Un exemple d'application Next.js avec thème sombre/clair",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXT.js Sample",
    description: "Un exemple d'application Next.js avec thème sombre/clair",
  },
};