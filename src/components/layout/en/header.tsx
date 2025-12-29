"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { BioLogo } from "@/components/ui/bio-logo";

const navigation = [
  { name: "Home", href: "/en" },
  { name: "About", href: "/en/about" },
  {
    name: "Solutions",
    href: "/en/solutions",
    children: [
      { name: "Plant Biosecurity", href: "/en/solutions/plant", description: "Crops, Horticulture, Plantations" },
      { name: "Animal Health", href: "/en/solutions/animal", description: "Livestock & Aquaculture" },
    ],
  },
  { name: "Contract Manufacturing", href: "/en/maklon", highlight: true },
  { name: "Research", href: "/en/research" },
  { name: "News", href: "/en/news" },
  { name: "Contact", href: "/en/contact" },
];

export function HeaderEN() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-carbon-100"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/en" className="flex items-center gap-2 group">
              <div className="transform group-hover:scale-105 transition-transform">
                <BioLogo size={40} />
              </div>
              <div>
                <span
                  className={`font-display font-bold text-lg block leading-none transition-colors ${
                    isScrolled || mobileMenuOpen ? "text-carbon-900" : "text-white"
                  }`}
                >
                  Biosolution
                </span>
                <span
                  className={`text-xs transition-colors ${
                    isScrolled || mobileMenuOpen ? "text-forest-600" : "text-forest-300"
                  }`}
                >
                  Biotechnology Partner
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.children ? (
                    <button
                      onFocus={() => setActiveDropdown(item.name)}
                      onBlur={(e) => {
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
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2 ${
                        isActive(item.href)
                          ? isScrolled
                            ? "text-forest-600 bg-forest-50"
                            : "text-white bg-white/10"
                          : isScrolled || mobileMenuOpen
                          ? "text-carbon-600 hover:text-forest-600 hover:bg-forest-50"
                          : "text-carbon-200 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2 ${
                        isActive(item.href)
                          ? isScrolled
                            ? "text-forest-600 bg-forest-50"
                            : "text-white bg-white/10"
                          : isScrolled || mobileMenuOpen
                          ? "text-carbon-600 hover:text-forest-600 hover:bg-forest-50"
                          : "text-carbon-200 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-carbon-100 p-2 z-50"
                        role="menu"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            role="menuitem"
                            onBlur={(e) => {
                              const parent = e.currentTarget.closest('[role="menu"]');
                              if (!parent?.contains(e.relatedTarget as Node)) {
                                setActiveDropdown(null);
                              }
                            }}
                            className="block px-4 py-3 rounded-lg hover:bg-forest-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-inset"
                          >
                            <span className="font-medium text-carbon-900 block">
                              {child.name}
                            </span>
                            <span className="text-xs text-carbon-500">{child.description}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <Link
                href="/"
                aria-label="Switch to Indonesian"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2 ${
                  isScrolled ? "text-carbon-600 hover:text-forest-600 hover:bg-forest-50" : "text-carbon-200 hover:text-white hover:bg-white/10"
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>ID</span>
              </Link>

              <Link
                href="/en/contact"
                className={`hidden md:flex btn-primary text-sm ${
                  isScrolled ? "bg-forest-600 hover:bg-forest-500" : "bg-white/10 hover:bg-white/20 border border-white/20"
                }`}
              >
                Contact Us
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu-en"
                className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2 ${
                  isScrolled || mobileMenuOpen ? "text-carbon-900" : "text-white"
                }`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-menu-en"
            aria-label="Mobile navigation"
            className="fixed top-20 left-0 right-0 z-40 bg-white border-b border-carbon-100 lg:hidden"
          >
            <div className="container-wide py-6">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-inset ${
                        isActive(item.href)
                          ? "text-forest-600 bg-forest-50"
                          : "text-carbon-700 hover:bg-carbon-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2 rounded-lg text-sm text-carbon-600 hover:bg-carbon-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-inset"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
