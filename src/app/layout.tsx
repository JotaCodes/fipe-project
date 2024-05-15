import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { FipeProvider } from "@/Context";

const roboto = Roboto({ style: "normal", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projeto Teste FIPE",
  description: "Projeto feito para teste profissional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <FipeProvider>
        <html lang="en">
          <body className={roboto.className}>{children}</body>
        </html>
      </FipeProvider>
  );
}
