import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#002D62] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">ACIA</span>
            </div>
            <span className="font-bold text-[#002D62] hidden sm:inline">ACIA</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">
            <a className="text-gray-700 hover:text-[#005EB8] transition">Home</a>
          </Link>
          <Link href="/services">
            <a className="text-gray-700 hover:text-[#005EB8] transition">Services</a>
          </Link>
          <Link href="/network">
            <a className="text-gray-700 hover:text-[#005EB8] transition">Global Network</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-700 hover:text-[#005EB8] transition">About</a>
          </Link>
          <Link href="/contact">
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
            <Link href="/">
              <a className="text-gray-700 hover:text-[#005EB8] transition block py-2">Home</a>
            </Link>
            <Link href="/services">
              <a className="text-gray-700 hover:text-[#005EB8] transition block py-2">Services</a>
            </Link>
            <Link href="/network">
              <a className="text-gray-700 hover:text-[#005EB8] transition block py-2">Global Network</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-700 hover:text-[#005EB8] transition block py-2">About</a>
            </Link>
            <Link href="/contact">
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
