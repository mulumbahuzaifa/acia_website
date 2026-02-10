import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Lightbulb, Target, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#002D62] to-[#005EB8] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About ACIA</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Africa's Premier Testing, Inspection, and Certification Agency
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#005EB8]">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-[#005EB8]" size={32} />
                <h2 className="text-3xl font-bold text-[#002D62]">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To empower African industries and governments by providing world-class Testing, Inspection, and Certification services that ensure product quality, regulatory compliance, and market access while fostering sustainable economic growth and international competitiveness.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#005EB8]">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="text-[#005EB8]" size={32} />
                <h2 className="text-3xl font-bold text-[#002D62]">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be Africa's most trusted and respected TIC provider, recognized globally for technical excellence, innovation, and our commitment to bridging global standards with African expertise, driving prosperity across the continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#F4F4F4] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#002D62] mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Integrity", desc: "Unwavering commitment to honesty and ethical practices" },
              { title: "Excellence", desc: "Pursuit of highest standards in all our operations" },
              { title: "Innovation", desc: "Continuous improvement and adoption of new technologies" },
              { title: "Partnership", desc: "Collaborative approach to solving industry challenges" },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-[#005EB8] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Focus Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#002D62] mb-12 text-center">Strategic Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#005EB8] mb-6">Standards Harmonization</h3>
              <p className="text-gray-700 mb-4">
                We are committed to bridging the gap between African national standards and international requirements, particularly through our partnership with China. This harmonization reduces non-tariff trade barriers and facilitates seamless market access.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Aligning African standards with global benchmarks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Establishing mutual recognition agreements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Facilitating Africa-China trade corridors</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#005EB8] mb-6">Capacity Building</h3>
              <p className="text-gray-700 mb-4">
                Through strategic partnerships and technology transfer, we are building Africa's indigenous TIC capacity. Our goal is to empower local governments and industries with the skills and infrastructure needed for sustainable growth.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Training and development programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Laboratory infrastructure investment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Technology transfer and knowledge sharing</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#005EB8] mb-6">AI-Driven Innovation</h3>
              <p className="text-gray-700 mb-4">
                We are embracing Artificial Intelligence to enhance our TIC services, from predictive analytics to remote inspection capabilities. This enables us to deliver faster, more accurate results while maintaining global standards.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Predictive risk analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                  <span>AI-powered remote inspection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Automated compliance mapping</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#005EB8] mb-6">Government Revenue Growth</h3>
              <p className="text-gray-700 mb-4">
                By providing accurate, independent verification of trade volumes and product values, we help African governments increase customs efficiency and tax compliance, directly contributing to national revenue and economic development.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Customs facilitation and verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Trade value optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Revenue enhancement programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global South Cooperation */}
      <section className="bg-[#F4F4F4] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#002D62] mb-12 text-center">Global South Cooperation</h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-6 leading-relaxed">
              ACIA is at the forefront of Global South cooperation, fostering mutually beneficial relationships between African nations and China. Our mission is to create sustainable trade corridors that benefit both regions through improved quality, reduced barriers, and enhanced market access.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-[#002D62] mb-4">Benefits for Africa</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Improved local TIC capacity and infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Increased government revenue through trade verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Enhanced competitiveness of African exports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Technology transfer and skill development</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#002D62] mb-4">Benefits for China</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Access to high-quality African raw materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Reliable supply chain verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Expanded markets for Chinese technology and services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#005EB8] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Strengthened economic partnerships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#002D62] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Transforming African Industries</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Partner with ACIA to unlock new opportunities and drive sustainable growth.
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
