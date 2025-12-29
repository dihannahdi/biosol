"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  ChevronDown,
  FlaskConical,
  Users,
  Newspaper,
  Phone,
  ArrowRight,
  Globe,
  Factory,
} from "lucide-react";
import { BioLogo } from "@/components/ui/bio-logo";

const navigation = [
  {
    name: "Tentang Kami",
    href: "/about",
    icon: Users,
  },
  {
    name: "Solusi",
    href: "/solutions",
    icon: FlaskConical,
    children: [
      { name: "Biosekuriti Tanaman", href: "/solutions/plant", description: "Tanaman pangan, hortikultura, perkebunan" },
      { name: "Peternakan", href: "/solutions/livestock", description: "Ternak unggas, ruminansia, babi" },
      { name: "Perikanan", href: "/solutions/fishery", description: "Tambak udang, kolam ikan, keramba" },
      { name: "Household Care", href: "/solutions/household", description: "Rumah tangga & hotel" },
      { name: "Bioproses Industri", href: "/solutions/industrial", description: "Pengolahan limbah industri" },
    ],
  },
  {
    name: "Jasa Maklon",
    href: "/maklon",
    icon: Factory,
    highlight: true,
  },
  {
    name: "Riset",
    href: "/research",
    icon: FlaskConical,
  },
  {
    name: "Berita",
    href: "/news",
    icon: Newspaper,
  },
  {
    name: "Kontak",
    href: "/contact",
    icon: Phone,
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Pages that need solid header from the start (light background pages)
  const lightBackgroundPages = [
    '/solutions/plant',
    '/solutions/animal',
    '/solutions/livestock',
    '/solutions/fishery',
    '/solutions/household',
    '/solutions/industrial',
    '/research',
    '/about',
    '/contact',
    '/maklon'
  ];
  
  const needsSolidHeader = lightBackgroundPages.some(page => pathname.startsWith(page));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled || needsSolidHeader
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-carbon-900/5 py-3"
            : "bg-transparent py-6"
        )}
      >
        <nav className="container-wide">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex items-center gap-3 group">
              <div className="relative transform group-hover:scale-105 transition-transform duration-300">
                <BioLogo size={48} />
                <div className="absolute -inset-1 bg-gradient-to-br from-forest-500 to-microbe-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <span className={cn(
                  "block font-display text-xl font-bold transition-colors duration-300",
                  isScrolled || needsSolidHeader ? "text-carbon-900" : "text-white"
                )}>
                  Biosolution
                </span>
                <span className={cn(
                  "block text-xs font-medium tracking-wider uppercase transition-colors duration-300",
                  isScrolled || needsSolidHeader ? "text-carbon-500" : "text-white/80"
                )}>
                  Biotechnology Partner
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <button
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      onFocus={() => setActiveDropdown(item.name)}
                      onBlur={(e) => {
                        // Don't close if focus moves to dropdown children
                        if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                          setActiveDropdown(null);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveDropdown(activeDropdown === item.name ? null : item.name);
                        }
                        if (e.key === 'Escape') {
                          setActiveDropdown(null);
                        }
                      }}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                      className={cn(
                        "flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2",
                        pathname.startsWith(item.href)
                          ? isScrolled || needsSolidHeader
                            ? "text-forest-700 bg-forest-50" 
                            : "text-white bg-forest-500/30"
                          : isScrolled || needsSolidHeader
                            ? "text-carbon-600 hover:text-forest-700 hover:bg-forest-50/50"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {item.name}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          activeDropdown === item.name && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "px-4 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2",
                        pathname === item.href
                          ? isScrolled || needsSolidHeader
                            ? "text-forest-700 bg-forest-50"
                            : "text-white bg-forest-500/30"
                          : isScrolled || needsSolidHeader
                            ? "text-carbon-600 hover:text-forest-700 hover:bg-forest-50/50"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.children && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                          className="absolute top-full left-0 pt-3"
                        >
                          <div className="bg-white rounded-2xl shadow-xl shadow-carbon-900/10 border border-carbon-100 p-3 min-w-[280px]" role="menu">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                role="menuitem"
                                onBlur={(e) => {
                                  // Close dropdown if focus leaves the menu entirely
                                  const parent = e.currentTarget.closest('[role="menu"]');
                                  if (!parent?.contains(e.relatedTarget as Node)) {
                                    setActiveDropdown(null);
                                  }
                                }}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-forest-50 transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-inset"
                              >
                                <div className="w-10 h-10 rounded-lg bg-forest-100 flex items-center justify-center shrink-0 group-hover:bg-forest-200 transition-colors">
                                  <FlaskConical className="w-5 h-5 text-forest-600" />
                                </div>
                                <div>
                                  <span className="block font-medium text-carbon-900 group-hover:text-forest-700 transition-colors">
                                    {child.name}
                                  </span>
                                  <span className="block text-sm text-carbon-500">
                                    {child.description}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/en"
                className={cn(
                  "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2",
                  isScrolled || needsSolidHeader
                    ? "text-carbon-500 hover:text-forest-600 hover:bg-forest-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
                aria-label="Switch to English"
              >
                <Globe className="w-4 h-4" />
                <span>EN</span>
              </Link>
              <Link
                href="/contact"
                className="btn-primary group"
              >
                <span>Hubungi Kami</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden relative z-10 p-2 rounded-xl transition-colors",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2",
                isScrolled || needsSolidHeader
                  ? "hover:bg-forest-50 text-carbon-900"
                  : "hover:bg-white/10 text-white"
              )}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-carbon-900/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              id="mobile-menu"
              aria-label="Mobile navigation"
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-6">
                <div className="flex-1 space-y-2">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.children ? (
                        <div className="space-y-2">
                          <button
                            onClick={() =>
                              setActiveDropdown(
                                activeDropdown === item.name ? null : item.name
                              )
                            }
                            className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-carbon-900 rounded-xl hover:bg-forest-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-inset"
                            aria-expanded={activeDropdown === item.name}
                          >
                            {item.name}
                            <ChevronDown
                              className={cn(
                                "w-5 h-5 transition-transform",
                                activeDropdown === item.name && "rotate-180"
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden pl-4"
                              >
                                {item.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    className="block px-4 py-2.5 text-carbon-600 hover:text-forest-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-inset rounded-lg"
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-lg font-medium text-carbon-900 rounded-xl hover:bg-forest-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-inset"
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6 border-t border-carbon-100"
                >
                  <Link href="/contact" className="btn-primary w-full justify-center">
                    Hubungi Kami
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
