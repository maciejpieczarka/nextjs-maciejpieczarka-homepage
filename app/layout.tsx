import { Container } from '@chakra-ui/react';
import Fonts from '../components/Fonts';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  description: "Maciej Pieczarka's personal portfolio website",
  authors: [
    {
      name: 'Maciej Pieczarka',
    },
  ],
  keywords:
    'portfolio, portfolio website, developer, maciej pieczarka, web development, nextjs, chakraui, tailwindcss, sanity, fullstack, frontend',
  title: 'Maciej Pieczarka - portfolio website',
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#F1E3D7] dark:bg-[#202023]">
        <Providers>
          <Fonts />
          <Navbar />
          <Container maxW="container.xl" position="relative">
            {children}
          </Container>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
