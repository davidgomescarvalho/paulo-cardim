"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Cart } from "@/components/cart";
import { Logo } from "@/components/logo";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-600 ${
        scrolled ? "bg-white/40 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-sm uppercase">
        <Logo />
        <Navbar />
        <Cart />

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <motion.nav
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex flex-col items-center space-y-10 text-3xl font-serif"
            >
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link href="/shop" onClick={() => setMenuOpen(false)}>
                Shop
              </Link>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
      <nav className="container mx-auto"></nav>
    </header>
  );
};
