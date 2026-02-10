import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#002D62] to-[#005EB8] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Comprehensive Testing, Inspection, and Certification solutions tailored to your industry needs
          </p>
        </div>
      </section>

      {/* Mineral Testing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#002D62] mb-6">Mineral Testing Laboratories</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our state-of-the-art mineral testing laboratories provide high-precision analysis of ores, concentrates, and industrial minerals. We utilize advanced instrumentation to determine accurate composition, purity, and quality metrics.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#005EB8] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Ore grade determination and assay</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#005EB8] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Mineral composition analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#005EB8] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Quality control and certification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#005EB8] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Environmental impact assessment</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="bg-[#005EB8] hover:bg-[#002D62] text-white">
                  Request Testing <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
            <div className="bg-[#F4F4F4] h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">⛏️</div>
                <p className="text-gray-600 font-semibold">Mineral Testing Lab</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oil & Gas Labs */}
      <section className="bg-[#F4F4F4] py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🛢️</div>
                <p className="text-gray-600 font-semibold">Oil & Gas Testing Lab</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#002D62] mb-6">Oil & Petrochemical Laboratories</h2>
              <p className="text-lg text-gray-600 mb-6">
                Comprehensive testing for crude oil, refined products, and lubricants. We ensure compliance with international quality standards and environmental regulations through rigorous analytical procedures.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#005EB8] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Crude oil and refined product testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#005EB8] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Lubricant performance analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#005EB8] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Environmental compliance certification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#005EB8] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">International standard alignment</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="bg-[#005EB8] hover:bg-[#002D62] text-white">
                  Request Testing <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EV/AV Testing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#002D62] mb-6">EV/AV Testing & Compliance</h2>
              <p className="text-lg text-gray-600 mb-6">
                Leading the way in Future Mobility with specialized testing for Electric Vehicles (EV) and Autonomous Vehicles (AV). We provide rigorous safety, performance, and cybersecurity certification for next-generation transport systems.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#005EB8] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Battery safety and performance testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#005EB8] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Autonomous system validation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#005EB8] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Cybersecurity assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#005EB8] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Global compliance certification</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="bg-[#005EB8] hover:bg-[#002D62] text-white">
                  Request Testing <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
            <div className="bg-[#F4F4F4] h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚗</div>
                <p className="text-gray-600 font-semibold">EV/AV Testing Lab</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="bg-[#F4F4F4] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002D62] mb-4">Industry Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored TIC services across multiple sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Automotive", desc: "Component testing and vehicle certification" },
              { title: "Infrastructure", desc: "Materials testing and structural compliance" },
              { title: "Energy", desc: "Power generation and renewable energy testing" },
              { title: "Agriculture", desc: "Crop and soil quality analysis" },
              { title: "Manufacturing", desc: "Product quality and safety certification" },
              { title: "Trade & Logistics", desc: "Cargo verification and customs clearance" },
            ].map((industry, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#005EB8] mb-2">{industry.title}</h3>
                <p className="text-gray-600">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#002D62] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Our team of experts can develop tailored testing and certification programs for your specific needs.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[#002D62] hover:bg-gray-100 text-lg px-8 py-6">
              Contact Our Experts
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
