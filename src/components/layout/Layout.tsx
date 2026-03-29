import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import CookieBanner from './CookieBanner';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

const pageVariants: Variants = {
  initial: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.3, ease: "easeIn" } },
};

const Layout: React.FC = () => {
  const [devBannerVisible, setDevBannerVisible] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <motion.main
        className="flex-grow bg-chalk"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={pageVariants}
      >
        <Outlet />
      </motion.main>

      <Footer />
      <ScrollToTop />
      <CookieBanner />

      {/* Banner de desenvolvimento */}
      <AnimatePresence>
        {devBannerVisible && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 bg-[#CFFF04] text-neutral-900 py-2 px-4 shadow-lg z-[100]"
          >
            <div className="lg:container lg:mx-auto lg:max-w-7xl">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-medium flex-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                    <path d="M12 9v4" />
                    <path d="M12 17h.01" />
                  </svg>
                  <p className="text-center">
                    <strong>Website em Desenvolvimento:</strong> Alguma informação apresentada pode estar incorreta ou desatualizada.
                  </p>
                </div>
                <button
                  onClick={() => setDevBannerVisible(false)}
                  className="flex-shrink-0 p-1 hover:bg-neutral-900/10 rounded-sm transition-colors"
                  aria-label="Fechar aviso"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;