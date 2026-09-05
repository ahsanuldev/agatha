import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agatha - Photography Portfolio',
  description: 'Agatha Photography Portfolio Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,300,500,700,100"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </head>
      <body id="body" className="bg-[#111111] text-[#EEE] antialiased">
        {children}
      </body>
    </html>
  );
}
