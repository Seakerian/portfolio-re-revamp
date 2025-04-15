import "./globals.css";

export const metadata = {
  title: "Marvin's Site",
  description: "Marvin's personal portfolio",
};

export default function RootLayout({ children }) {
  const basePath =
    process.env.NODE_ENV === "production" ? "/portfolio-re-revamp" : "";
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${basePath}/favicon.ico?v=1`} sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
