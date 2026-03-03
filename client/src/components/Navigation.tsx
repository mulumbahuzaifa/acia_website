import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/acia-hero-image.png"
            alt="ACIA Logo"
            className="w-10 h-10 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-[#005EB8] transition">
            Home
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-[#005EB8] transition">
            Services
          </Link>
          <Link href="/network" className="text-gray-700 hover:text-[#005EB8] transition">
            Global Network
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-[#005EB8] transition">
            About
          </Link>
          <Link href="/contact" asChild>
            <Button variant="default" className="bg-[#005EB8] hover:bg-[#002D62]">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-[#005EB8] transition block py-2">
              Home
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-[#005EB8] transition block py-2">
              Services
            </Link>
            <Link href="/network" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-[#005EB8] transition block py-2">
              Global Network
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-[#005EB8] transition block py-2">
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} asChild>
              <Button variant="default" className="w-full bg-[#005EB8] hover:bg-[#002D62]">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
