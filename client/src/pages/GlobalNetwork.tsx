import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, MapPin, Users, Globe } from "lucide-react";

export default function GlobalNetwork() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#002D62] to-[#005EB8] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Global Network</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Strategic locations and partnerships spanning Africa, Asia, Europe, and the Americas
          </p>
        </div>
      </section>

      {/* Key Metrics */}
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
                <Globe className="text-[#005EB8]" size={32} />
                <div>
                  <h3 className="text-3xl font-bold text-[#002D62]">17</h3>
                  <p className="text-gray-600">Product Categories</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-[#005EB8]">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="text-[#005EB8]" size={32} />
                <div>
                  <h3 className="text-3xl font-bold text-[#002D62]">6</h3>
                  <p className="text-gray-600">Continents Covered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACIA Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#002D62] mb-12 text-center">ACIA Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                <h3 className="text-2xl font-bold text-[#002D62]">Johannesburg</h3>
              </div>
              <p className="text-gray-600 mb-4">South Africa</p>
              <p className="text-gray-700 mb-6">
                Regional Headquarters. Our flagship facility houses advanced testing laboratories for minerals, oil, and EV/AV systems.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Services:</strong> Mineral Testing, Oil Labs, EV/AV Testing, Certifications
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                <h3 className="text-2xl font-bold text-[#002D62]">Kampala</h3>
              </div>
              <p className="text-gray-600 mb-4">Uganda</p>
              <p className="text-gray-700 mb-6">
                East Africa Operations Center. Serving the East African region with comprehensive TIC services and local expertise.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Services:</strong> Testing, Inspection, Certification, Trade Facilitation
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                <h3 className="text-2xl font-bold text-[#002D62]">Lusaka</h3>
              </div>
              <p className="text-gray-600 mb-4">Zambia</p>
              <p className="text-gray-700 mb-6">
                Southern Africa Operations. Supporting mining and agricultural sectors with specialized testing and certification.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Services:</strong> Mineral Testing, Agricultural Testing, Certifications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CCIC Partnership */}
      <section className="bg-[#F4F4F4] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#002D62] mb-12 text-center">Strategic Partnership: CCIC</h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-bold text-[#005EB8] mb-6">China Certification & Inspection Group</h3>
            <p className="text-gray-700 mb-6">
              Our partnership with CCIC extends our global reach and capabilities. CCIC operates a vast network of branches and laboratories across six continents, enabling seamless trade facilitation and standards harmonization between Africa and China.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-[#002D62] mb-4">CCIC Global Presence</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Asia:</strong> Singapore, India, Thailand, Japan, Philippines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Europe:</strong> UK, France, Germany, Spain, Netherlands, Hungary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Americas:</strong> Brazil, USA, Canada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Africa:</strong> South Africa, DRC, Kenya, Guinea, UAE</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Oceania:</strong> Australia</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#002D62] mb-4">Benefits of Partnership</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Standards harmonization between Africa and China</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Mutual recognition of test results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Reduced non-tariff trade barriers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Technology transfer and capacity building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Enhanced market access for African products</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Strategic Partnerships */}
          <h2 className="text-3xl font-bold text-[#002D62] mb-8 text-center">South African Strategic Partnerships</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#005EB8] mb-4">SANAS</h3>
              <p className="text-gray-700 mb-4">
                South African National Accreditation System
              </p>
              <p className="text-gray-600 text-sm">
                Ensuring global recognition of our technical competence and accreditation status in testing, inspection, and certification activities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#005EB8] mb-4">SABS</h3>
              <p className="text-gray-700 mb-4">
                South African Bureau of Standards
              </p>
              <p className="text-gray-600 text-sm">
                Collaborative framework for developing and implementing national and international quality standards across industries.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#005EB8] mb-4">CSIR</h3>
              <p className="text-gray-700 mb-4">
                Council for Scientific and Industrial Research
              </p>
              <p className="text-gray-600 text-sm">
                Strategic research and development partnership driving industrial innovation and technological advancement in TIC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#002D62] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Connect with Our Global Network</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Leverage our worldwide presence and strategic partnerships for your testing and certification needs.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[#002D62] hover:bg-gray-100 text-lg px-8 py-6">
              Get in Touch <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
