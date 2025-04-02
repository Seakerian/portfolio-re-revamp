import "./globals.css";

export const metadata = {
  title: "Marvin's Site",
  description: "Marvin's personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
