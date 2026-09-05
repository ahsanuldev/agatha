'use client';

import { useState } from 'react';
import Header from '../../layout/Header';
import OffCanvasMenu from '../../layout/OffCanvasMenu';
import Footer from '../../layout/Footer';
import ScrollToTop from '../../layout/ScrollToTop';

const PageShell = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header onMenuTrigger={() => setMenuOpen(true)} />

      <OffCanvasMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>{children}</main>

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default PageShell;
