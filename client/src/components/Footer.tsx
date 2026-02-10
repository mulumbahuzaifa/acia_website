import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#002D62] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">ACIA</h3>
            <p className="text-gray-300 text-sm">
              Africa Certification and Inspection Agency - Transforming African industries through global standards.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/"><a className="hover:text-white transition">Home</a></Link></li>
              <li><Link href="/services"><a className="hover:text-white transition">Services</a></Link></li>
              <li><Link href="/network"><a className="hover:text-white transition">Global Network</a></Link></li>
              <li><Link href="/about"><a className="hover:text-white transition">About</a></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">Mineral Testing</a></li>
              <li><a href="#" className="hover:text-white transition">Oil & Gas Labs</a></li>
              <li><a href="#" className="hover:text-white transition">EV/AV Testing</a></li>
              <li><a href="#" className="hover:text-white transition">Certifications</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Johannesburg, South Africa</li>
              <li>Kampala, Uganda</li>
              <li>Lusaka, Zambia</li>
              <li><a href="mailto:info@acia.africa" className="hover:text-white transition">info@acia.africa</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; 2026 Africa Certification and Inspection Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
