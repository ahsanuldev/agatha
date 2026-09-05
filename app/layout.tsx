import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agatha - Portfolio & Blog',
  description: 'Portfolio and blog pages built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,300,500,700,100"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
