import "./globals.css";

export const metadata = {
  title: "Marvin's Site",
  description: "Marvin's personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?=v1" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
