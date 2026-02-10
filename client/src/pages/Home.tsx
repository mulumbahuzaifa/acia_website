import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Globe, Users, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#002D62] to-[#005EB8] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Africa's Premier Testing, Inspection & Certification Agency
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                Bridging global standards with African expertise. Empowering industries through rigorous testing, independent inspection, and trusted certification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button className="bg-white text-[#002D62] hover:bg-gray-100 text-lg px-8 py-6">
                    Explore Services <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                <img
                  src="/acia-hero-image.png"
                  alt="ACIA Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="bg-[#F4F4F4] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-[#005EB8]">
              <div className="flex items-center gap-4 mb-4">
                <Users className="text-[#005EB8]" size={32} />
                <div>
                  <h3 className="text-3xl font-bold text-[#002D62]">3000+</h3>
                  <p className="text-gray-600">Professionals Globally</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-[#005EB8]">
              <div className="flex items-center gap-4 mb-4">
                <Award className="text-[#005EB8]" size={32} />
                <div>
                  <h3 className="text-3xl font-bold text-[#002D62]">17</h3>
                  <p className="text-gray-600">Categories of Expertise</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-[#005EB8]">
              <div className="flex items-center gap-4 mb-4">
                <Globe className="text-[#005EB8]" size={32} />
                <div>
                  <h3 className="text-3xl font-bold text-[#002D62]">Top Tier</h3>
                  <p className="text-gray-600">EV/AV Compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002D62] mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive Testing, Inspection, and Certification solutions across multiple industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-[#005EB8] mb-4">Mineral Testing</h3>
              <p className="text-gray-600 mb-6">
                High-precision analysis of ores and concentrates with advanced instrumentation for accurate composition determination.
              </p>
              <Link href="/services">
                <a className="text-[#005EB8] font-semibold hover:text-[#002D62] flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </a>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-[#005EB8] mb-4">Oil & Gas Labs</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive testing for crude oil, refined products, and lubricants ensuring compliance with international standards.
              </p>
              <Link href="/services">
                <a className="text-[#005EB8] font-semibold hover:text-[#002D62] flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </a>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-[#005EB8] mb-4">EV/AV Testing</h3>
              <p className="text-gray-600 mb-6">
                Specialized safety, performance and cybersecurity testing for Electric and Autonomous Vehicles.
              </p>
              <Link href="/services">
                <a className="text-[#005EB8] font-semibold hover:text-[#002D62] flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="bg-[#F4F4F4] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002D62] mb-4">Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Strategic locations across Africa and partnerships with leading international certification bodies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#002D62] mb-6">ACIA Locations</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full mt-1.5"></span>
                  <div>
                    <p className="font-semibold text-gray-800">Johannesburg, South Africa</p>
                    <p className="text-gray-600 text-sm">Regional Headquarters</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full mt-1.5"></span>
                  <div>
                    <p className="font-semibold text-gray-800">Kampala, Uganda</p>
                    <p className="text-gray-600 text-sm">East Africa Operations</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full mt-1.5"></span>
                  <div>
                    <p className="font-semibold text-gray-800">Lusaka, Zambia</p>
                    <p className="text-gray-600 text-sm">Southern Africa Operations</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#002D62] mb-6">Strategic Partners</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mt-1.5"></span>
                  <div>
                    <p className="font-semibold text-gray-800">CCIC (China Certification & Inspection Group)</p>
                    <p className="text-gray-600 text-sm">Global network across 6 continents</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mt-1.5"></span>
                  <div>
                    <p className="font-semibold text-gray-800">SANAS</p>
                    <p className="text-gray-600 text-sm">South African National Accreditation System</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mt-1.5"></span>
                  <div>
                    <p className="font-semibold text-gray-800">SABS & CSIR</p>
                    <p className="text-gray-600 text-sm">Standards and research partnerships</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/network">
              <Button className="bg-[#005EB8] hover:bg-[#002D62] text-white text-lg px-8 py-6">
                Explore Global Network <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#002D62] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner with ACIA?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let us help you ensure quality, compliance, and market access for your products and services.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[#002D62] hover:bg-gray-100 text-lg px-8 py-6">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
